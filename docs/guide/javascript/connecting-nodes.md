# Connecting nodes

If you haven't seen the slides of the [home page](/), we recommend see them, to understand the concept of a node.

For now, we are going to refer them as server and clients. Keep in mind that server is a node that listen to other clients. And a client is just a node that connect to another node. The server in this case.


```js
// node.js (server)
const dop = require('dop')
const listener = dop.listen() // WebSockets using ws on port 4444 by default
listener.on('connect', node => {
    console.log('New client connected!')
})
```


```js
// Browser (client) using ES6
import dop from 'dop'
const server = dop.connect() // Native WebSockets by default
server.on('connect', () => {
    console.log('Connected!')
})
```


> #### Next step
> [Subscribing](/guide/javascript/subscribing)

