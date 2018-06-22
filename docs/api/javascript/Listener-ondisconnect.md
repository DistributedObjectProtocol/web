# Listener.on('disconnect', callback)

> Event emmited when a node is disconnected. The disconnected event only emmits when server calls [Node.disconnect](/api/javascript/Node-disconnect). Or when timeout is reached on [transports](/transports) that use it.


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
- [Listener.on('connect')](/api/javascript/Listener-onconnect)
- [Listener.on('reconnect')](/api/javascript/Listener-onreconnect)
- [connect](/api/javascript/connect)
- [listen](/api/javascript/listen)
