# on('reconnect', callback)

> Event emmited when a node is reconnected.


## Arguments

#### 'reconnect' `String`

#### callback `Function`


## Example

```js
const server = dop.connect()
server.on('connect', () => console.log('Connected!') )
server.on('reconnect', () => console.log('Reconnected!') )
```


##### As server

```js
const listener = dop.listen()
listener.on('connect', node => {
    console.log('New node connected!')
    node.on('reconnect', () => console.log('Reconnected!') )
})
```



> See also
- [node.on('connect')](/api/javascript/node-onconnect)
- [node.on('disconnect')](/api/javascript/node-ondisconnect)
- [node.on('reconnect')](/api/javascript/node-onreconnect)
- [connect](/api/javascript/connect)
- [listen](/api/javascript/listen)