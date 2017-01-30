# Connecting nodes

If you haven't seen the slides of the [home page](/), we recommend to see it, to have a global picture of what dop is and to have clear the concept of nodes. Then come back here.

But now to be clear we are going to refer them as server and clients. But keep in mind that server is a node that listen to other clients (nodes). And the client is a node that is going to connect to the server (another node).

#### node.js (server)

```js
const dop = require('dop')
const listener = dop.listen() // WebSockets using ws on port 4444 by default
listener.on('connect', node => {
    console.log('New client connected!')
})
```


#### Browser (client) with ES6
```js
import dop from 'dop'
const server = dop.connect() // Native WebSockets by default
server.on('connect', () => {
    console.log('Connected!')
})
```


> Next &gt; [Using multiple transports](/guide/javascript/using-multiple-transports)

