
# Using multiple transports

Transports in dop allow you to listen from different sources and protocols. Imagine you are building an APP that runs on webs and mobiles, on webs you want to give support for websockets but for mobiles you want to give HTTP support. Your code will look almost the same you just need to add both listeners. 

Unfortunately, the HTTP transport is in development, but we can illustrate the example with WebSockets + socket.io.

```js
const dop = require('dop')
const socketioTransport = require('dop-transports').listen.socketio
const listenerWs = dop.listen() // WebSockets using ws on port 4444
const listenerSocketio = dop.listen({transport:socketioTransport}) // socketio on port 4445
listenerWs.on('connect', node => {
    console.log('New client/node connected via WebSockets!')
})
listenerSocketio.on('connect', node => {
    console.log('New client/node connected via socket.io!')
})
```

When a new client/node try to subscribe. We can reuse the same dop.onSubscribe code for all the transports. And you can easily determine what listener is using.


```js
const myObject = dop.register({Hola: 'Mundo'})
dop.onSubscribe((...args) => {
    const req = args[args.length-1]
    const node = req.node

    if (node.listener === listenerWs)
        console.log('Client/node subscribing from WebSockets')

    else if (node.listener === listenerSocketio)
        console.log('Client/node subscribing from socket.io')

    return myObject
})
```

*For a more detailed documentation about [transports, visit the page](/transports)*

