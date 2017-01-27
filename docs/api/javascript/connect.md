# connect( [options] )

> Connect with a listening [node](/api/javascript/node).

## Arguments

#### [options] `Object`
- *[transport](/transports/javascript/websockets-connect)* `Function` By default is [ws](https://github.com/websockets/ws) on node.js and native WebSockets on browsers.

## Returns

A new [node](/api/javascript/node) instance.


## Examples

```js
// node.js
const dop = require('dop')
const listener = dop.connect() // ws by default
```

```js
// browser
import dop from 'dop'
const listener = dop.connect() // WebSockets by default
```

If you don't want to use ES6

```html
<script src="https://unpkg.com/dop"></script>
<script>
var listener = dop.connect() // WebSockets by default
</script>
```


> See also
- [listen](/api/javascript/listen)
- [WebSockets transport](/transports/javascript/websockets)