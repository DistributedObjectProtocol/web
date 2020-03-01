What is this dop thing? You might be wondering.

> **Distributed Object Protocol** is a thin layer on top of your data network that helps you communicate server and clients (nodes) using [RPCs](https://en.wikipedia.org/wiki/Remote_procedure_call). It is also a pattern that makes easy update, mutate or even sync the state of your App using [Patches](https://github.com/DistributedObjectProtocol/protocol#Patches).


You can find this description a bit poor, especially because it mixes two concepts RPCs and Patches. It also has a pattern and the word protocol. Dop is a complex concept, so let's explain it step by step


{% listing https://dev.to/enzo/creating-a-real-time-app-with-react-and-dop-part-1-4cf0 %}
{% listing https://dev.to/deadlybyte/html-click-to-call-tel-schema-1k1l %}

# Patches

A patch describes mutations to be made in our state using plain objects. Is like using [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) or [_.merge](https://lodash.com/docs/4.17.15#merge) but in a more advanced way.

A patch looks like this.
```js
const state = { red: 0, blue: 0 }
const patch = { blue: 1 }
const { result } = applyPatch(state, patch) 
result // { red: 0, blue: 1 }
```


The point of a patch is that makes very easy to send them through the wire and mutate the state of other nodes (server-clients). JSON Merge Patch spec was defined by IETF in 2014 https://tools.ietf.org/html/rfc7386.




# The pattern

If you are familiar with React, you have probably heard about [Unidirectional Data Flow](https://flaviocopes.com/react-unidirectional-data-flow/). In general means that the data have only one way to be transferred to other parts of the application.

![Unidirectional Data Flow](https://raw.githubusercontent.com/DistributedObjectProtocol/web/master/resources/explaining/diagram1.png)

In the React world, the view is a component. And patches are actions. So imagine we have a button that counts every time we click on it.

The flow would be:

1. User clicks on Button
2. Sends a patch like this `{ count: count+1 }`
3. Apply the patch to the store/state
4. Notify components to be re-render




# An example using React

We have three buttons. Red, Blue and Magenta with a counter on each one. But the result of Magenta is the sum of clicks that we have on Red and Blue. We can also click on Magenta which will result in an increment of the Red and Blue counter.

![React Demo 1](https://raw.githubusercontent.com/DistributedObjectProtocol/web/master/resources/explaining/react-demo1.gif)

#### Let't start creating the store.

```js
import { createStore } from "dop";

const store = createStore({ red: 0, blue: 0 });
```

#### Now, we need a way to mutate our state.

```js
function setGlobalState(patch) {
  store
    .applyPatch(patch)
    .filter(({ mutations }) => mutations.length > 0)
    .forEach(({ listener, patch }) => listener(patch));
}
```


Here, we are applying the patch. Then we call the listeners that previously were subscribed to the store.

#### Is the turn for subscriptions. 

For our components we are going to use [hooks](https://reactjs.org/docs/hooks-intro.html), which makes our subscription system very clean and simple.

```js
export function useGlobalState(...colors) {
  // colors is the array of properties that we want to subscribe to

  // A trick to re-render our component every time we need it
  const [, forceUpdate] = React.useState();
  React.useEffect(() => {
    // This filter is called every time a property mutates the state.
    const filter = mutation => {
      // prop is the property is being mutated. It can only be red or blue.
      const { prop } = mutation;
      
      // If we return false this mutation will be ignored,
      // therefore the component won't be re-rendered.
      return colors.includes(prop);
    };
    const listener = patch => {
      forceUpdate(patch);
    };

    const unsubscribe = store.subscribe(listener, filter);
    return () => {
      unsubscribe();
    };
  }, [forceUpdate, colors]);

  return [store.state, setGlobalState];
}

```

#### Let's use this hook in the components.
```js
import { useGlobalState } from "./store.js";

function Red() {
  const [globalState, setGlobalState] = useGlobalState("red");
  const { red } = globalState;
  return (
    <button
      onClick={() =>
        setGlobalState({
          red: red + 1
        })
      }
    >{red}</button>
  );
}
```

Magenta looks quite similar.

```js
function Magenta() {
  const [globalState, setGlobalState] = useGlobalState("red", "blue");
  const { red, blue } = globalState
  return (
    <button
      onClick={() =>
        setGlobalState({
          red: red + 1,
          blue: blue + 1
        })
      }
    >{red + blue}</button>
  );
}
```

Here is the codesandbox of this example to play with 

https://codesandbox.io/s/dop-react-mgmzl

#### What is happening here?

![Diagram 2](https://raw.githubusercontent.com/DistributedObjectProtocol/web/master/resources/explaining/diagram2.png)

1. When we click on the red button.
2. We call `setGlobalState` with our patch.
3. Then we apply the patch and our state changes. 
4. `store.applyPatch` returns an array of objects. Each object contains the listener and the mutations previously filtered by the filter passed in the subscription inside the hook.
5. Then we filter again if mutations are greater than zero.
6. If so, we call the listener which is actually the forceUpdate function.
7. Our component renders with the new state.


In my opinion, the best part of this pattern is that makes very easy subscribe granularly to the properties that our component cares about. That's why our components only re-renders when they need to.

---

So, what's the point of learning another state-management library when I can do the same with Redux, MobX or even React Context. And you are right. If you only need to manage state in the client you are fine with your current solution. The thing is that this pattern can be extended to the server, and here is where dop really shines.

I'm going to stop here. Is already a long post and too much to understand. But if you want to know how to extend this concept to the server and see the real-time demo, please [follow me on Twitter](https://twitter.com/josema_enzo). I will publish the second part very soon.


Thanks for reading.
