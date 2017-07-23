# connect( [options] )

> Connect with a listening [Node](/api/javascript/Node).

## Arguments

#### [options] `Object`
- *[transport](/transports/javascript/websockets-connect)* `Function` By default is [ws](https://github.com/websockets/ws) on node.js and native WebSockets on browsers.

## Returns

A new [Node](/api/javascript/Node) instance.


## Examples

```js
// browser
import dop from 'dop'
const node_server = dop.connect() // WebSockets by default
```



> See also
- [listen](/api/javascript/listen)
- [WebSockets transport](/transports/javascript/websockets)