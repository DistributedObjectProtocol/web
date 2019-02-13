# getRequest( args )

> Returns a special `Promise` that can be used to make your remote function asynchronous.

## Arguments

#### args `Array`

A function with the logic of your mutations.

## Returns

A Promise object.


## Examples
```js
// server
serverFunctions.login = (email, password, ...args) => {
    const request = dop.getRequest(args)
    setTimeout(()=>{
        if (email === 'johndoe@mail.com' && password === '1234')
            request.resolve(true)
        else
            request.reject('Invalid login')
    }, 1000)
    // request is a promise and we must return it in order to resolve this function async
    return request
}

// client
try {
    const isLogged = await serverFunctions.login('wrong', 'wrong')
}
catch (message_error) {
    console.error(message_error) // > 'Invalid login'
}
```

If you are not using ES6 you must pass the special [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object:

```js
serverFunctions.login = function (email, password) {
    const request = dop.getRequest(arguments)
    ...
```


If the function is being invoked remotely `request` will have the special property `node` which identifies the node that is calling the function.

```js
serverFunctions.login = (email, password, ...args) => {
    // If node is undefined means the function is not invoked remotely.
    const { node } = dop.getRequest(args)
    return node.token // a54a6843-08a9-4332-a365-0c86aa4fe0b5
}
```





> See also
- [Remote procedure calls](/guide/javascript/remote-procedure-calls)