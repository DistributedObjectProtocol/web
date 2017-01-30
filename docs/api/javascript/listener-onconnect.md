# on('connect', callback)

> Event emmited when a node is connected


## Arguments

#### 'connect' `String`

#### callback `Function`


## Example

```js
const listener = dop.listen()
listener.on('connect', node => console.log('Connected!') )
```


> See also
- [listener.on('connect')](/api/javascript/listener-onconnect)
- [listener.on('disconnect')](/api/javascript/listener-ondisconnect)
- [listener.on('reconnect')](/api/javascript/listener-onreconnect)
- [connect](/api/javascript/connect)
- [listen](/api/javascript/listen)