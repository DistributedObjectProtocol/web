# Node.on('connect', callback)

> Event emmited when a node is connected


## Arguments

#### 'connect' `String`

#### callback `Function`


## Example

```js
const server = dop.connect()
server.on('connect', () => console.log('Connected!') )
```


> See also
- [Node.on('disconnect')](/api/javascript/Node-ondisconnect)
- [Node.on('reconnect')](/api/javascript/Node-onreconnect)
- [connect](/api/javascript/connect)
- [listen](/api/javascript/listen)