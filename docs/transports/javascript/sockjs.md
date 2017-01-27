# [SockJS](https://github.com/sockjs)

## listen( [options] )

### Options

- *port* `Number` default `4446`

- *timeout* `Number` default `60 (seconds)`
When a node is disconnected this can be reconnected if the time spent if less than 60 seconds. You can define your own timeout.

- *namespace* `String` default `dop`

- *httpServer* `Object`
You can set a http server. If not httpServer is passed then `port` option will take over.

```js
const sockjsTransport = require('dop-transports').listen.sockjs
const listener = dop.listen({
    transport:sockjsTransport,
    namespace:'dop',
    port:4446,
    timeout:60
})
listener.on('connect', node => console.log('Connected!', node.token))
```


#### Using httpServer
```js
const http = require('http');
const httpServer = http.createServer(function (req, res) {})
httpServer.listen(4446);

const sockjsTransport = require('dop-transports').listen.sockjs
const listener = dop.listen({httpServer:httpServer, transport:sockjsTransport});
listener.on('connect', onconnect);
// In browser or in other node instance. Even here would work
dop.connect({url:'ws://localhost:4446'})
```



#### Using [ExpressJS](https://github.com/expressjs/express)

```js
const express = require('express')
const http = require('http')
const app = express()
const expressServer = http.createServer(app)
expressServer.listen(4446)

const sockjsTransport = require('dop-transports').listen.sockjs
const listener = dop.listen({httpServer:expressServer, transport:sockjsTransport});
listener.on('connect', node => console.log('Connected!', node.token))
```



## connect( [options] )

### Options

- *url* `String` default `ws://localhost:4446/dop`

### In node.js

```js
const sockjsTransport = require('dop-transports').connect.sockjs
const server = dop.connect({transport:sockjsTransport})
server.on('connect', () => console.log('Server connected!'))
```

### In browsers

In browsers you have to include SockJS client library manually

```js
import sockjsTransport from 'dop-transports/connect/sockjs'
const server = dop.connect({transport:sockjsTransport, url:'ws://localhost:4445/test'})
server.on('connect', () => console.log('Server connected!'))
```

```html
<script src="https://cdn.jsdelivr.net/sockjs/1/sockjs.min.js"></script>
<script src="https://unpkg.com/dop"></script>
<script src="https://unpkg.com/dop-transports@2.0.2/connect/sockjs.js"></script>
<script>
var sockjsTransport = dop.transports.connect.sockjs
var server = dop.connect({transport:sockjsTransport, url:'ws://localhost:4445/test'})
server.on('connect', () => console.log('Server connected!'))
</script>
```

