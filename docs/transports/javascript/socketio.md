# [socket.io](https://github.com/socketio)


## listen( [options] )

### Options

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
    namespace:'dop',
    port:4445,
    timeout:60
})
listener.on('connect', node => console.log('Connected!', node.token))
```


#### Using httpServer
```js
const http = require('http');
const httpServer = http.createServer(function (req, res) {})
httpServer.listen(4445);

const socketioTransport = require('dop-transports').listen.socketio
const listener = dop.listen({httpServer:httpServer, transport:socketioTransport});
listener.on('connect', onconnect);
// In browser or in other node instance. Even here would work
dop.connect({url:'ws://localhost:4445'})
```



#### Using [ExpressJS](https://github.com/expressjs/express)

```js
const express = require('express')
const http = require('http')
const app = express()
const expressServer = http.createServer(app)
expressServer.listen(4445)

const socketioTransport = require('dop-transports').listen.socketio
const listener = dop.listen({httpServer:expressServer, transport:socketioTransport});
listener.on('connect', node => console.log('Connected!', node.token))
```



## connect( [options] )

### Options

- *url* `String` default `ws://localhost:4445/dop`

### In node.js

```js
const socketioTransport = require('dop-transports').connect.socketio
const server = dop.connect({transport:socketioTransport})
server.on('connect', () => console.log('Server connected!'))
```

### In browsers

In browsers you have to include socket.io client library manually

```js
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

