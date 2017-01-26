# WebSockets / connect

## Browsers

Uses native WebSockets

```js
import dop from 'dop'
const server = dop.connect({url:'ws://localhost:12345'})
server.on('connect', ()=>{
    console.log('Connected!!')
})
```

If you don't use ES6

```html
<script src="https://unpkg.com/dop"></script>
<script>
var server = dop.connect({url:'ws://localhost:12345'})
server.on('connect', function() {
    console.log('Connected!!')
})
</script>
```



## node.js

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

You can get the API of ws using the function `getApi`
```js
const ws = require('ws')
const wsTransport = require('dop-transports').connect.ws
console.log(wsTransport.getApi() === ws) // true
```




## Options

- *url* `String` default ws://localhost:4444