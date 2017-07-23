
# Mutating objects

Dop uses [ES6 Proxies](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy) under the hood to give a clear an readable API. Proxies are supported on node.js natively since version 6. On browsers are [quite limited](http://caniuse.com/#search=proxy) for now. To give the support you just can use [dop.set](/api/javascript/set) and [dop.del](/api/javascript/del). Or you can also use the [google polifyll](https://github.com/GoogleChrome/proxy-polyfill). But doesn't work for new properties or when deleting.

In the roadmap of dop we have a babel plugin that transpile from Proxy syntax to dop.set and dop.del functions.



Mutations are only unidirectional as explained on the [slides of the home page](/), which means that having the same object in server and client only client will receive mutations if is the client the one that subscribed.

Remember we already have an object on client and server `dataServer` let's mutate the object on server:

```js
// server
dataServer.totalUsers += 1
```

 Now client can observe mutations

```js
// client
const observer = dop.createObserver(mutations => {
    console.log(dataServer.totalUsers) // > 1
})
observer.observe(dataServer)
```

If client mutate dataServer server won't be notified but the mutation will still be observed.




*For a more detailed documentation have a look [createObserver](/api/javascript/createObserver)*





> #### Next step
> [Remote procedure calls](/guide/javascript/remote-procedure-calls)

