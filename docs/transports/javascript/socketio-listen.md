# socket.io

## listen( [options] )

#### Options

- *port* `Number` default `4445`

- *timeout* `Number` default `60 (seconds)`
When a node is disconnected this can be reconnected if the time spent if less than 60 seconds. You can define your own timeout.

- *namespace* `String` default `dop`

- *httpServer* `Object`
You can set a http server. If not httpServer is passed then `port` option will take over.

```js
const socketioTransport = require('dop-transports').listen.socketio
const listener = dop.listen({
    transport:socketioTransport,
    namespace:'test',
    port:12345,
    timeout:10
})
listener.on('connect', node => console.log('Connected!', node.token))
```



## connect()

#### Options

- *url* `String` default `ws://localhost:4445/dop`

```js
// node.js
const socketioTransport = require('dop-transports').connect.socketio
const server = dop.connect({transport:socketioTransport})
server.on('connect', () => console.log('Server connected!'))
```

In browsers you have to include socket.io client library manually

```js
// browser ES6
import socketioTransport from 'dop-transports/connect/socketio'
const server = dop.connect({transport:socketioTransport, url:'ws://localhost:4445/test'})
server.on('connect', () => console.log('Server connected!'))
```

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.2/socket.io.min.js"></script>
<script src="https://unpkg.com/dop"></script>
<script src="https://unpkg.com/dop-transports@2.0.2/connect/socketio.js"></script>
<script>
var socketioTransport = dop.transports.connect.socketio
var server = dop.connect({transport:socketioTransport, url:'ws://localhost:4445/test'})
server.on('connect', () => console.log('Server connected!'))
</script>
```

