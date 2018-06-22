# Node.reconnect()

> Try to reconnect to the node previously connected. This function is only available on nodes that connect. And only for a specific transports that need connectivity.


## Examples
```js
// server
const listener = dop.listen()
listener.on('connect', client => {
    console.log('Client connected')
    setTimeout(()=>{
        console.log('Closing client')
        client.socket.close();
    }, 500)
})
listener.on('reconnect', client => console.log('Client reconnected') )
```


```js
// client
const server = dop.connect()
server.on('connect', () => console.log('✅ I\'m connected!') )
server.on('disconnect', () => server.reconnect() )
server.on('reconnect', () => console.log('✅ I reconnected!') )
```






> See also
- [Node.on('connect')](/api/javascript/Node-onconnect)
- [Node.on('disconnect')](/api/javascript/Node-ondisconnect)
- [Node.on('reconnect')](/api/javascript/Node-onreconnect)
- [listen](/api/javascript/listen)
- [connect](/api/javascript/connect)