
# Remote procedure calls

When we did a mutation of `dataServer` on client, the server didn't receive the mutation. That is because is unidiectional dataflow as mentiones before.

But what we can do is define a function on server and call that function from the client.



```js
// server
dataServer.increaseTotalUsers = () => {
    dataServer.totalUsers += 1
}
```

We just have to call that function on client and we will receive the mutation as usual with `dop.createObserver`

```js
// client
const observer = dop.createObserver(mutations => {
    console.log(dataServer.totalUsers)
})
observer.observeObject(dataServer)

dataServer.increaseTotalUsers()
```


What about getting values?

```js
// server
dataServer.square = number => number*number

// client
await dataServer.square(5) // > 25
```


Multiple arguments

```js
// server
dataServer.fullName = (name, surname) => `Your full name is ${name} ${surname}`

// client
await dataServer.fullName('John', 'Doe') // > "Your full name is John Doe"
```




We can throw an error. And catch it on the client.

```js
// server
dataServer.login = (email, password) => {
    if (email === 'johndoe@mail.com' && password === '1234')
        return true
    else
        throw 'Invalid login'
}

// client
try {
    const isLogged = await dataServer.login('wrong', 'wrong')
}
catch (message_error) {
    console.error(message_error) // > 'Invalid login'
}
```

When calling a remote function, the last argument is always a deferred promise with an extra property that identifies the node that is calling the function.

Resolving asynchronously:

```js
// server
dataServer.login = (email, password, ...args) => {
    const request = dop.getRequest(args)
    setTimeout(()=>{
        if (email === 'johndoe@mail.com' && password === '1234')
            request.resolve(true)
        else
            request.reject('Invalid login')
    }, 1000)
    // We must return request to make this function asynchronously
    return request
}
```



When calling a remote function always return a [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise). Instead of `await` we can resolve the previous example as normal promises.

```js
// client
dataServer.login('johndoe@mail.com', '1234')
    .then(isLogged => console.log(isLogged))
    .catch(message_error => console.error(message_error))
```




Getting the node that is running this function

```js
// server
dataServer.getMyToken = (...args) => {
    const { node } = dop.getRequest(args) 
    return node.token
}

// client
const myToken = await dataServer.getMyToken() // > a54a6843-08a9-4332-a365-0c86aa4fe0b5
```




> #### Next step
> [Using multiple transports](/guide/javascript/using-multiple-transports)

