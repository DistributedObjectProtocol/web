# subscribe( [...args] )

> Nodes subscribe to local objects

## Arguments

#### ...args `arg1, args2, args3, ...*`


## Returns

A promise that resolve or reject when the other node response.


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

##### Using promises

```js
const server = dop.connect()
server.subscribe('johndoe@mail.com', '1234')
    .then(user => console.log(user))
    .catch(message_error => console.error(message_error))
```






> See also
- [onSubscribe](/api/javascript/onSubscribe)
- [register](/api/javascript/register)
- [subscribe.into](/api/javascript/subscribeinto)