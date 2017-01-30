# on('disconnect', callback)

> Event emmited when a node is disconnected. The disconnected event only emmits when server calls [disconnect()](/api/javascript/disconnect). Or when timeout is reached on [transports](/transports) that use it.


## Arguments

#### 'disconnect' `String`

#### callback `Function`


## Example

```js
const listener = dop.listen()
listener.on('connect', node => console.log('Connected!') )
listener.on('disconnect', node => console.log('Disconnected!') )
```


> See also
- [listener.on('connect')](/api/javascript/listener-onconnect)
- [listener.on('disconnect')](/api/javascript/listener-ondisconnect)
- [listener.on('reconnect')](/api/javascript/listener-onreconnect)
- [connect](/api/javascript/connect)
- [listen](/api/javascript/listen)