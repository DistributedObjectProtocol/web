# connect( [options] )

> Creates a new [node](/javascript/api/node) instance that connects to another node.

## Arguments

#### options `{Object} optional`
- `transport`*(function)* By default is [ws](https://github.com/websockets/ws) on node.js and native WebSockets on browsers.

## Returns

A new [node](/javascript/api/node) instance.


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
