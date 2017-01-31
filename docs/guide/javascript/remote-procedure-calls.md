
# Remote procedure calls

Remember that when we mutate `dataServer` on client the server won't be notified? That is because is unidiectional dataflow as mentiones before.

But we can do is define a function on server and call that function from the client.



```js
// server
dataServer.increaseTotalUsers = () => {
    dataServer.totalUsers += 1
}
```

We just have to call that function on client and we will receive the mutation as usual with `dop.observe`

```js
// client
dop.observe(dataServer, mutations => {
    console.log(dataServer.totalUsers)
})
dataServer.increaseTotalUsers()
```


What about getting values?

```js
// server
dataServer.square = number => number*number

// client
let squareOfFive = await dataServer.square(5) // > 25
```


Multiple arguments

```js
// server
dataServer.fullName = (name, surname) => `Your full name is ${name} ${surname}`

// client
await dataServer.fullName('John', 'Doe') // > "Your full name is John Doe"
```


When calling a remote function, the last argument is always a deferred promise with an extra property that identifies the node that is calling the function.

As a promise we can reject it.

```js
// server
dataServer.login = (email, password, ...args) => {
    const req = args[args.length-1]
    const reject = req.reject
    if (email === 'johndoe@mail.com' && password === '1234')
        return true
    else
        return reject('Invalid login')
}

// client
try {
    const isLogged = await dataServer.login('wrong', 'wrong')
}
catch (message_error) {
    console.error(message_error) // > 'Invalid login'
}
```


Resolving asynchronously

```js
// server
dataServer.login = (email, password, ...args) => {
    const req = args[args.length-1]
    const resolve = req.resolve
    const reject = req.reject
    setTimeout(()=>{
        if (email === 'johndoe@mail.com' && password === '1234')
            resolve(true)
        else
            reject('Invalid login')
    }, 1000)

    // You must return req to make this function asynchronously
    return req
}
```

Getting the node that is running this function

```js
// server
dataServer.getMyToken = (...args) => {
    const req = args[args.length-1]
    const node = req.node
    return node.token
}

// client
const isLogged = await dataServer.getMyToken() // > a54a6843-08a9-4332-a365-0c86aa4fe0b5
```


When calling a remote function always return a [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise). Instead of `await` we can resolve the previous example as normal promises.

```js
// client
dataServer.login('johndoe@mail.com', '1234')
    .then(isLogged => console.log(isLogged))
    .catch(message_error => console.error(message_error))
```



> #### Next step
> [Using multiple transports](/guide/javascript/using-multiple-transports)

