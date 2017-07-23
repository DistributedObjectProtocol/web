# Node.disconnect()

> Disconnect a node. When running this function, node can't be reconnected.


## Examples

##### Disconnecting from the server client can reconnect but the session will be a new one.

```js
const listener = dop.listen()
let disconnectedOnce = false
listener.on('connect', client => {
    if (!disconnectedOnce) {
        console.log('Client connected')
        setTimeout(()=>{
            disconnectedOnce = true
            console.log('Disconnecting client')
            client.disconnect();
        }, 1000)
    }
    else {
        console.log('Client connected again but with a new socket')
    }
})


// client
const server = dop.connect()
server.on('connect', () => console.log('✅ Im connected!') )
server.on('disconnect', () => {
    console.log('✅ Im disconnected!')
    server.reconnect() 
})
```


##### Disconnecting from the client reconnect won't work

```js
// server
const listener = dop.listen()
listener.on('connect', client => {
    console.log('Client connected')
})


// client
const server = dop.connect()
server.on('connect', () => {
    console.log('✅ Im connected!')
    setTimeout(()=>{
        console.log('✅ Disconnecting client')
        server.disconnect();
    }, 1000)
})
server.on('disconnect', () => {
    console.log('✅ Im disconnected!')
    server.reconnect() // won't work
})
```




> See also
- [Node.on('connect')](/api/javascript/Node-onconnect)
- [Node.on('disconnect')](/api/javascript/Node-ondisconnect)
- [Node.on('reconnect')](/api/javascript/Node-onreconnect)
- [listen](/api/javascript/listen)
- [connect](/api/javascript/connect)