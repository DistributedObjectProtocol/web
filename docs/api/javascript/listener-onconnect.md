# Listener.on('connect', callback)

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
- [Listener.on('disconnect')](/api/javascript/Listener-ondisconnect)
- [Listener.on('reconnect')](/api/javascript/Listener-onreconnect)
- [connect](/api/javascript/connect)
- [listen](/api/javascript/listen)