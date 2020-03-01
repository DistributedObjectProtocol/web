In the [first part of this post](https://dev.to/enzo/creating-a-real-time-app-with-react-and-dop-part-1-4cf0), we explained the basics of dop. What is a Patch or the Pattern that we used to create an App in React.

But we still have to see how RPCs and the Protocol works.

# RPCs

> A remote procedure call, is when a computer program causes a procedure (subroutine) to execute in a different address space (commonly on another computer on a shared network. - [(Wikipedia)](https://en.wikipedia.org/wiki/Remote_procedure_call)

In other words, is a way to run a function/method remotely. This is how RPCs looks like in dop.


```js
// Server
function multiply(a, b) {
  return a * b
}

// Client
await multiply(3, 3) // 9
```

Thanks to the async/await syntax, this example is so simple to read. But let's try something mindblowing.

```js
// Server
function square(n, callback) {
  callback(n * n)
}

// Client
square(5, result => {
  console.log(result) // 25
})
```

In dop **RPCs can be created on the fly**. Which means we can call a remote function and pass a callback as an argument.

This is very powerful because it let us write code with the feeling of writing it locally. 

But how does it work under the hood?


# The Protocol

The format of an RPC.

```js
// Request
[<request_id>, <function_id>, [<argument1>, <argument2>, ...]]

// Response
[-<request_id>, <response_state>, <response_value>]
```

Important to notice that the `<request_id>` of the response is the same of the request but in negative. So if we take the multiply example we have above, it will looks like this.

```js
// Client -> Server (Request)
[123, "multiply", [3, 3]]

// Server -> Client (Response)
[-123, 0, 9]
```

The square example is a bit more complex because we are using two RPCs.

```js
// Client -> Server (Request)
[124, "square", [5, {"$f":"callback"}]]
// Server -> Client (Request)
[124, "callback", [25]]
// Server -> Client (Response)
[-124, 0]
// Client -> Server (Response)
[-125, 0]
```

As you can see the protocol is very lightweight in term of bytes to send. But we can do better because we are receiving unnecessary responses. Dop allows us to call [RPCs without responses](https://github.com/DistributedObjectProtocol/protocol#request-without-response). So the example above would be like this:


```js
// Client -> Server
[0, "square", [5, {"$f":"callback"}]]
// Server -> Client
[0, "callback", [25]]
```

We send `0` as `<request_id>` because we don't expect any response.

# React

Enough theory. Remember the example of the three buttons we made with React in the [first part of this article?](https://dev.to/enzo/creating-a-real-time-app-with-react-and-dop-part-1-4cf0)

![Diagram 2](https://raw.githubusercontent.com/DistributedObjectProtocol/web/master/resources/explaining/diagram2.png)



We can implement the same concept in a Server-Client architecture by adding a few more lines of code. All we have to do is:

1. Create the same store on the server.
2. Connect the clients (nodes) via WebSockets.
3. Subscribe to the store of the server.

![Diagram 3](https://raw.githubusercontent.com/DistributedObjectProtocol/web/master/resources/explaining/diagram3.png)

For this example, instead of calling `setGlobalState` which is the function we use to update the state on the client, we call `setServerState` every time we click on a button. And the store of the server calls the `setGlobalState` of all clients subscribed with the patch. 

Stop talking, show me the code!


#### 1. Creating the store in the server

```js
// server/store.js
const { createStore } = require("dop");

const store = createStore({ red: 0, blue: 0 });

function subscribe(listener) {
  store.subscribe(listener);
  return store.state;
}

function setServerState(patch) {
  store
    .applyPatch(patch)
    .forEach(({ listener }) => listener(patch));
}

function getEndpoints() {
  return {
    subscribe,
    setServerState
  };
}

exports.getEndpoints = getEndpoints;
```

#### 2. Connecting clients via WebSockets

```js
// server/index.js
const { createNode } = require("dop");
const { getEndpoints } = require("./store");
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", ws => {
  const client = createNode();
  // We pass getEndpoints as second argument. 
  // Will be the entrypoint on the client side once we connect them.
  client.open(ws.send.bind(ws), getEndpoints);
  ws.on("message", client.message);
});
```

#### 3. Subscribing to the server


```js
// client/store.js
import { createNode } from "dop"

let endpoints
const ws = new WebSocket('ws://localhost:8080');
const server = createNode();
ws.onopen = async () => {
  // This is how we get the getEndpoints function from the server
  const getEndPoints = server.open(ws.send.bind(ws));
  endpoints = await getEndPoints();
  // Here we are subscribing and receiving the current state from the server
  const state = await endpoints.subscribe(setGlobalState);
  // Applying the current state of the server to our global store
  setGlobalState(state);
};
ws.onmessage = e => server.message(e.data);
```

That's it. Now, we only need to use the `setServerState` function in our React hook.

```js
function setServerState(patch) {
  endpoints.setServerState(patch);
}

export function useGlobalState(...colors) {
  ...
  // return [store.state, setGlobalState];
  return [store.state, setServerState];
}
```

The codesandbox of this example https://codesandbox.io/s/react-dop-websockets-95gdx
{% codesandbox 95gdx %}


Maybe you have already noticed, but I'd like to highlight this part.


```js
// Server
function subscribe(listener) {
  store.subscribe(listener);
  return store.state;
}

// Client
const state = await endpoints.subscribe(setGlobalState);
setGlobalState(state);
```

Here, we are actually passing our `setGlobalState` function as a listener to subscribe to the server store. And this function will be called every time we mutate the state in the server. 

I my opinion this concept is very cool because it makes very easy connecting stores and keeps the state of our App sync.

And this is all the data we are sending through the wire by clicking on the red button just once.

```js
// Client -> Server: Client calls getEntryPoints
[1,0]
// Server -> Client: Server response with the endpoints
[-1,0,{"subscribe":{"$f":1},"setServerState":{"$f":2}}] 

// Client -> Server: Client calls subscribe and pass setGlobalState
[2,1,[{"$f":1}]]
// Server -> Client: Server Response with the current state
[-2,0,{"red":0,"blue":0}]

// Client -> Server: Client calls setServerState passing the patch
[0,2,[{"red":1}]]
// Server -> Client: Server calls setGlobalState passing the patch
[0,1,[{"red":1}]] 
```

# Final thoughts

The worst part of creating an open-source project is that in the end, you have to promote it somehow if you want people to use it. And that's the part that I truly hate. I like to code, I don't like to sell. 

But after three rewrites of the project. I made a solution that I'm very proud of. And, I've spent too many hours on it to leave it without showing it to the world.

I really think that dop is a good solution to handle state in different kind of architectures. Not the best one, but a good one with some trade-offs of course. People will say at the end.

I hope you enjoyed reading. And please, if you have any question or concern don't hesitate to let me know.

Thanks for reading :)