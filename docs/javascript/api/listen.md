# listen( [options] )

> Creates a new [listener](/javascript/api/listener) instance that listen for new [connections/nodes](/javascript/api/node).

## Arguments

#### [options] `Object`
- *[transport](/javascript/transports/websockets)* `Function` By default is WebSockets ([ws](https://github.com/websockets/ws)) on node.js

## Returns

A new [listener](/javascript/api/listener) instance.


## Examples
```js
let dop = require('dop')
let listener = dop.listen()
```