# onSubscribe( callback )

> Nodes subscribe to local objects

## Arguments

#### callback `Function(arg1, args2, args3, ..., req)`
- *arg1, args2, args3, ...*
- *..., req* `Object` Last argument is a deferred promise
 - *resolve* `Function`
 - *reject* `Function`
 - *node* `Object` The object node that is trying to subscribe


## Examples
```js
// server
let listener = dop.listen()
let user = dop.register({
    name: 'John',
    surname: 'Doe'
})
dop.onSubscribe(() => user)


// client
let server = dop.connect()
let user = await server.subscribe()
console.log(user) // {name:'John', surname:'Doe'}
```

##### You can pass arguments when calling subscribe

```js
// server
dop.onSubscribe((email, password) => {
    if (email === 'johndoe@mail.com' && password === '1234')
        return user
})

// client
let user = await server.subscribe('johndoe@mail.com', '1234')
```

##### If onSubscribe doesn't return an object will reject an error to the subscriber/client

```js
// server
dop.onSubscribe((email, password) => {
    if (email === 'johndoe@mail.com' && password === '1234')
        return user
})

// client
try {
    let user = await server.subscribe('wrong', 'wrong')
} catch(message_error) {
    console.error(message_error) // Remote object not found or not permissions to use it
}
```




##### But you can customize your rejections

```js
// server
dop.onSubscribe((email, password, ...args) => {
    let req = args[args.length-1]
    let reject = req.reject
    if (email === 'johndoe@mail.com' && password === '1234')
        return user
    else
        return reject('Invalid login')
})

// client
try {
    let user = await server.subscribe('wrong', 'wrong')
} catch(message_error) {
    console.error(message_error) // Invalid login
}
```


##### You can make it asynchronously

```js
// server
dop.onSubscribe((email, password, ...args) => {
    let req = args[args.length-1]
    let resolve = req.resolve
    let reject = req.reject
    setTimeout(()=>{
        if (email === 'johndoe@mail.com' && password === '1234')
            resolve(user)
        else
            reject('Invalid login')
    }, 1000)

    // return req to make it asynchronously
    return req
})
```



##### Nodes have the object listener attached

```js
// server
let transportSocketio = require('dop-transports').listen.socketio
let listenerWebsockets = dop.listen()
let listenerSocketio = dop.listen({transport:transportSocketio})
dop.onSubscribe((email, password, ...args) => {
    let req = args[args.length-1]
    let node = req.node

    if (node.listener === listenerWebsockets)
        return user1
    else
        return user2
})
```





> See also
- [Node.subscribe](/api/javascript/Node-subscribe)
- [register](/api/javascript/register)
- [listen](/api/javascript/listen)
- [connect](/api/javascript/connect)
- [socket.io transports](/transports/javascript/socketio)