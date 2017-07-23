# Node.on('reconnect', callback)

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
- [Node.on('connect')](/api/javascript/Node-onconnect)
- [Node.on('disconnect')](/api/javascript/Node-ondisconnect)
- [connect](/api/javascript/connect)
- [listen](/api/javascript/listen)