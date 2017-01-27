# WebSockets / listen

> You can use two libraries to listen via WebSockets in node.js
- [ws](https://github.com/websockets/ws) (default)
- [uWebSockets](https://github.com/uWebSockets/uWebSockets)


### ws

```js
const dop = require('dop')
const listener = dop.listen()
```

Equivalent to
```js
const dop = require('dop')
const wsTransport = require('dop-transports').listen.ws
const listener = dop.listen({transport:wsTransport})
```

You can get the API of ws using the function `getApi`
```js
const ws = require('ws').Server
const wsTransport = require('dop-transports').listen.ws
console.log(wsTransport.getApi() === ws) // true
```


### uWebSockets
```js
const uwsTransport = require('dop-transports').listen.uws
const listener = dop.listen({transport:uwsTransport})
```


## Options

- *port* `Number` default 4444

- *timeout* `Number` default 60 (seconds)
When a node is disconnected this can be reconnected if the time spent if less than 60 seconds. You can define your own timeout.

- *httpServer* `Object`
You can set a http server. If not httpServer is passed then `port` option will take over.


```js
const listener = dop.listen({port:12345, timeout:10})
```

Using httpServer
```js
const http = require('http');
const httpServer = http.createServer(function (req, res) {})
httpServer.listen(12345);

const listener = dop.listen({httpServer:httpServer});
listener.on('connect', onconnect);
// In browser or in other node instance. Even here would work
dop.connect({url:'ws://localhost:12345'})
```

With ExpressJS
```js
const express = require('express')
const http = require('http')
const app = express()
const expressServer = http.createServer(app)
expressServer.listen(12345)

const listener = dop.listen({httpServer:expressServer});
listener.on('connect', onconnect);
// In browser or in other node instance. Even here would work
dop.connect({url:'ws://localhost:12345'})
```
