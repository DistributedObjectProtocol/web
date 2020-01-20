# Node.message( message )

> It stablish a connection between two nodes.

## Arguments

#### send `Function`

Any time dop needs to send something to the other node will call this function with a message as an argument.

#### entryFunction `Function` Optional

An optional function that will be sent to the other side to start the communication.

## Returns

The `entryFunction` of the other side.

## Examples

```js
// Server
const { createNode } = require("dop")
const WebSocket = require("ws")
const wss = new WebSocket.Server({ port: 8080 })
function serverEntryFunction() {
    return {
        login,
        register,
        logout
    }
}
wss.on("connection", ws => {
    const client = createNode()
    client.open(msg => ws.send(JSON.stringify(msg)), serverEntryFunction)
    //...
})

// Client (Browser)
import { createNode } from "dop"
const ws = new WebSocket("ws://localhost:8080")
const server = createNode()

ws.onopen = async () => {
    const serverEntryFunction = server.open(msg => ws.send(JSON.stringify(msg)))
    // ...
}
```

Client is not passing an entryFunction as second argument. But both can do it.

```js
// Server
const clientEntryFunction = client.open(
    ws.send,
    function serverEntryFunction() {
        // do some stuff
    }
)

// Client (Browser)
const serverEntryFunction = server.open(
    ws.send,
    function clientEntryFunction() {
        // do some stuff
    }
)
```
