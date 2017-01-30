# on('connect', callback)

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
- [node.on('connect')](/api/javascript/node-onconnect)
- [node.on('disconnect')](/api/javascript/node-ondisconnect)
- [node.on('reconnect')](/api/javascript/node-onreconnect)
- [connect](/api/javascript/connect)
- [listen](/api/javascript/listen)