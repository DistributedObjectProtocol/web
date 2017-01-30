# on('reconnect', callback)

> Event emmited when a node is reconnected


## Arguments

#### 'reconnect' `String`

#### callback `Function`


## Example

```js
const listener = dop.listen()
listener.on('connect', node => console.log('Connected!') )
listener.on('reconnect', node => console.log('Reconnected!') )
```


> See also
- [listener.on('connect')](/api/javascript/listener-onconnect)
- [listener.on('disconnect')](/api/javascript/listener-ondisconnect)
- [listener.on('reconnect')](/api/javascript/listener-onreconnect)
- [connect](/api/javascript/connect)
- [listen](/api/javascript/listen)