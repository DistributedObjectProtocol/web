# Connecting nodes

The first thing to do is create nodes. Dop is transport agnostic so is up to you decide how they will communicate. In this guide, we will use WebSockets because is the easiest way to create real-time and bidirectional communication.

Assuming we already have a WebSocket connection

```js
// Server
const { createNode } = require('dop')
const client = createNode()

function getServerEndPoints() {
    return {
        login: () => {},
        register: () => {}
    }
}

client.open(ws.send, getServerEndPoints)
```

The first argument of open is a function that dop will run anytime it needs to send data to the other side. The second argument is an optional function that will be the entry point of the other side.

```js
// Client
const { createNode } = require('dop')
const server = createNode()
const getServerEndPoints = server.open(ws.send)
```

`open` returns the function that is been passed as second argument in the other side. Then when we run it, we will get what it should.

```js
const { login, register } = await getServerEndPoints()
```

Also don't forget passing all the data we receive from the othe side.

```js
ws.on('message', msg => {
    client.message(msg)
})
```

This might looks very abstract but when combining everything with a library like [ws](https://github.com/websockets/ws) is very clear and simple.

```js
// Server
const { createNode } = require('dop')
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })
function getOperations() {
    return {
        sum: (a, b) => a + b,
        multiply: (a, b) => a * b
    }
}
wss.on('connection', ws => {
    const client = createNode()
    client.open(msg => ws.send(JSON.stringify(msg)), getOperations)
    ws.on('message', msg => client.message(JSON.parse(msg)))
    ws.on('close', client.close)
})

// Client
const ws = new WebSocket('ws://localhost:8080')
const server = createNode()
ws.on('open', async () => {
    const getEndPoints = server.open(msg => ws.send(JSON.stringify(msg)))
    const { sum, multiply } = await getEndPoints()
    const result1 = await sum(5, 5)
    const result2 = await multiply(5, 5)
    console.log(result1, result2) // 10, 25
})
ws.on('message', msg => server.message(JSON.parse(msg)))
ws.on('close', server.close)
```

Try it yourself [https://runkit.com/josema/5e11d3313a68ac001a6a524e](https://runkit.com/josema/5e11d3313a68ac001a6a524e)

Or in the browser:

<!-- <script src="https://unpkg.com/dop@1.0.0-beta.1/dist/dop.umd.js"></script> -->

```html
<script src="https://unpkg.com/dop"></script>
<script>
    const ws = new WebSocket('ws://localhost:8080')
    const server = dop.createNode()

    ws.onopen = async () => {
        const getOperations = server.open(msg => ws.send(JSON.stringify(msg)))
        const { sum, multiply } = await getOperations()
        const result1 = await sum(5, 5)
        const result2 = await multiply(5, 5)
        alert(`${result1} ${result2}`) // 10, 25
    }
    ws.onmessage = e => server.message(JSON.parse(e.data))
    ws.onclose = server.close
</script>
```

> #### [Remote Procedure Calls →](/guide/javascript/remote-procedure-calls)
