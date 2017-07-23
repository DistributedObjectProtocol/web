# Listener.on('reconnect', callback)

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
- [Listener.on('connect')](/api/javascript/Listener-onconnect)
- [Listener.on('disconnect')](/api/javascript/Listener-ondisconnect)
- [connect](/api/javascript/connect)
- [listen](/api/javascript/listen)