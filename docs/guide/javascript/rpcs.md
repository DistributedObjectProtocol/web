# RPCs

Like you were calling a function locally

```js
// Server
function sum(a, b) {
    return a + b
}

// Client
const result = await sum(5, 5)
console.log(result) // 10
```

Old style using Promises

```js
// Client
sum(5, 5).then(result => {
    console.log(result) // 10
})
```

You can pass or recive any valid JSON value

```js
// Server
function sum({ a, b }) {
    return { result: a + b }
}

// Client
const { result } = await sum({ a: 5, b: 5 })
console.log(result) // 10
```

Remote Procedure Calls are the funniest part of this protocol because functions are created dynamically. Which means we can call a remote function and pass a local one as an argument.

```js
// Server
function square(n, callback) {
    callback(n * n)
}

// Client
square(5, result => {
    console.log(result) // 25
})
```

This will work as expected, but is a bad pattern. Because we are creating a new function every time we call square. Instead we should do something like this to create only one function on server.

```js
function square(n, callback) {
    callback(n * n)
}

// Client
function processResult(result) {
    console.log(result) // 25
}
calcSquare(5, processResult)
```

### Throwing errors

We can throw an error. And catch it on the client.

```js
// Server
function login(email, password) {
    if (email === 'johndoe@mail.com' && password === '1234') {
        return true
    } else {
        throw 'Invalid login'
    }
}

// Client
try {
    const isLogged = await login('wrong', 'wrong')
} catch (message_error) {
    console.error(message_error) // > 'Invalid login'
}
```

> If the error throwed is instance of [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) will be a normal error on server instead of throwing it to the client.

### Resolving asynchronously

When calling a remote function, the last argument is always a deferred promise.

```js
// Server
function login(email, password, ...args) {
    const request = args[args.length - 1]
    setTimeout(() => {
        if (email === 'johndoe@mail.com' && password === '1234') {
            request.resolve(true)
        } else {
            request.reject('Invalid login')
        }
    }, 1000)

    // We must return request to make this function asynchronous
    return request
}
```

Or you can use your own Promise

```js
function login(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'johndoe@mail.com' && password === '1234') {
                resolve(true)
            } else {
                reject('Invalid login')
            }
        }, 1000)
    })
}
```

### Auth

Dop does not handle authentication because not all situations needs it. But when we have the typical Server-Client architecture most of the time we need to know what client is calling our functions on server.

When a function is being called remotely the last argument is a Promise instance with an extra property named `node`. Which is the node that is calling the function. Is the same instance/object that we got using [`createNode`](/api/javascript/createnode).

```js
// Server
function login(email, password, ...args) {
    const { node } = args[args.length - 1]
}
```

[Learn more with the API.](/api/javascript).
