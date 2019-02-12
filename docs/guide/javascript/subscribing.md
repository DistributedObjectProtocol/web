
# Subscribing

Subscribe to objects is the main feature of this protocol. It allows you get a copy of an object and listen for mutations. And call remote functions.

But for now, we are just going to subscribe.

```js
// node.js (server)
const listener = dop.listen() // WebSockets using ws on port 4444
const dataServer = dop.register({totalUsers:0, date: new Date()})
dop.onSubscribe(() => dataServer)
```

```js
// Browser (client) using ES6
const server = dop.connect() // Native WebSockets using this url: 'ws://localhost:4444'
const dataServer = await server.subscribe()
console.log(dataServer) // {totalUsers: 0, date: Tue Jan 31 2017 11:40:33 GMT+0800 (WITA)}
```

*For a more detailed documentation have a look [onSubscribe](/api/javascript/onSubscribe) and [subscribe](/api/javascript/subscribe)*


> #### Next step
> [Mutating objects](/guide/javascript/mutating-objects)


