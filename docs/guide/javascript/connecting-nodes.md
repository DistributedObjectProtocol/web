# Connecting nodes

If you haven't seen the slides of the [home page](/), we recommend it. You will get the global picture of what dop is and will clarify the concept of nodes. Then come back here.

But for now, we are going to refer them as server and clients. But keep in mind that server is a node that listens to other clients. Clients are also nodes.


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

