# on('disconnect', callback)

> Event emmited when a node is disconnected.  When a node is connected via listen() the disconnected event only emmits when server calls [disconnect()](/api/javascript/disconnect). Or when timeout is reached on [transports](/transports) that use it.


## Arguments

#### 'disconnect' `String`

#### callback `Function`


## Example

```js
const server = dop.connect()
server.on('connect', () => console.log('Connected!') )
server.on('disconnect', () => console.log('Disconnected!') )
```


##### As server

```js
const listener = dop.listen()
listener.on('connect', node => {
    console.log('New node connected!')
    node.on('disconnect', () => console.log('Disconnected!') )
})
```



> See also
- [node.on('connect')](/api/javascript/node-onconnect)
- [node.on('disconnect')](/api/javascript/node-ondisconnect)
- [node.on('reconnect')](/api/javascript/node-onreconnect)
- [connect](/api/javascript/connect)
- [listen](/api/javascript/listen)
- [disconnect](/api/javascript/disconnect)
