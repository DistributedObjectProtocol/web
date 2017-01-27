# WebSockets

## listen( [options] )

### Options

- *port* `Number` default `4444`

- *timeout* `Number` default `60 (seconds)`
When a node is disconnected this can be reconnected if the time spent if less than 60 seconds. You can define your own timeout.

- *httpServer* `Object`
You can set a http server. If not httpServer is passed then `port` option will take over.




#### Using [ws](https://github.com/websockets/ws)

```js
const dop = require('dop')
const listener = dop.listen()
```

Equivalent to
```js
const dop = require('dop')
const wsTransport = require('dop-transports').listen.ws
const listener = dop.listen({transport:wsTransport, port:4444, timeout:60})
```

<!--
You can get the API of ws using the function `getApi`
```js
const ws = require('ws').Server
const wsTransport = require('dop-transports').listen.ws
console.log(wsTransport.getApi() === ws) // true
```
-->


#### Using [uWebSockets](https://github.com/uWebSockets/uWebSockets)
```js
const uwsTransport = require('dop-transports').listen.uws
const listener = dop.listen({transport:uwsTransport})
```



#### Using httpServer
```js
const http = require('http');
const httpServer = http.createServer(function (req, res) {})
httpServer.listen(4444);

const listener = dop.listen({httpServer:httpServer});
listener.on('connect', onconnect);
// In browser or in other node instance. Even here would work
dop.connect({url:'ws://localhost:4444'})
```


#### Using [ExpressJS](https://github.com/expressjs/express)
```js
const express = require('express')
const http = require('http')
const app = express()
const expressServer = http.createServer(app)
expressServer.listen(4444)

const listener = dop.listen({httpServer:expressServer});
listener.on('connect', onconnect);
// In browser or in other node instance. Even here would work
dop.connect({url:'ws://localhost:4444'})
```


## connect( [options] )

### Options

- *url* `String` default `ws://localhost:4444`


### In node.js

Uses [ws](https://github.com/websockets/ws)

```js
const dop = require('dop')
const server = dop.connect()
```

Equivalent to
```js
const dop = require('dop')
const wsTransport = require('dop-transports').connect.ws
const server = dop.connect({url:'ws://localhost:4444', transport:wsTransport})
```


### In browsers

Uses native WebSockets

```js
import dop from 'dop'
const server = dop.connect({url:'ws://localhost:4444'})
server.on('connect', ()=>{
    console.log('Connected!!')
})
```

If you don't use ES6

```html
<script src="https://unpkg.com/dop"></script>
<script>
var server = dop.connect({url:'ws://localhost:4444'})
server.on('connect', function() {
    console.log('Connected!!')
})
</script>
```
