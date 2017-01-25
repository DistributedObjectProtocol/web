# WebSockets

### Options

- *port* `Number` 4444



## Examples
```js
// Server
let dop = require('dop')
let listener = dop.listen() // ws by default
```

```js
// node.js
let dop = require('dop')
let listener = dop.connect() // ws by default
```

```js
// browser
import dop from 'dop'
let listener = dop.connect() // WebSockets by default
```






```js
// node.js
let dop = require('dop')
let socketio = require('dop-transports').listen.socketio
let listener = dop.listen({transport:socketio})
```

```js
// Browser
import dop from 'dop'
import socketio from 'dop-transports/connect/socketio'
let listener = dop.connect({transport:socketio})
```
