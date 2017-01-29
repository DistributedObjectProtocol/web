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
const listener = dop.listen()
const user = dop.register({
    name: 'John',
    surname: 'Doe'
})
dop.onSubscribe(() => user)


// client
const server = dop.connect()
const user = await server.subscribe()
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
const user = await server.subscribe('johndoe@mail.com', '1234')
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
    const user = await server.subscribe('wrong', 'wrong')
} catch(message_error) {
    console.error(message_error) // Remote object not found or not permissions to use it
}
```




##### But you can customize your rejections

```js
// server
dop.onSubscribe((email, password, ...args) => {
    const req = args[args.length-1]
    const reject = req.reject
    if (email === 'johndoe@mail.com' && password === '1234')
        return user
    else
        return reject('Invalid login')
})

// client
try {
    const user = await server.subscribe('wrong', 'wrong')
} catch(message_error) {
    console.error(message_error) // Invalid login
}
```


##### You can make it asynchronously

```js
// server
dop.onSubscribe((email, password, ...args) => {
    const req = args[args.length-1]
    const resolve = req.resolve
    const reject = req.reject
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
const transportSocketio = require('dop-transports').listen.socketio
const listenerWebsockets = dop.listen()
const listenerSocketio = dop.listen({transport:transportSocketio})
dop.onSubscribe((email, password, ...args) => {
    const req = args[args.length-1]
    const node = req.node

    if (node.listener === listenerWebsockets)
        return user1
    else
        return user2
})
```





> See also
- [node.subscribe](/api/javascript/subscribe)
- [register](/api/javascript/register)
- [listen](/api/javascript/listen)
- [connect](/api/javascript/connect)
- [socket.io transports](/transports/javascript/socketio)