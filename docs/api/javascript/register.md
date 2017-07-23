# register( object )

> Make a object observable that can be listen for mutations.

## Arguments

#### object `Object`
A POJO object.

## Returns

A [ES6 proxy](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy) object ready to be observed.


## Examples

```js
let user = dop.register({name: 'John'})
user.name // 'John'
```

```js
let user = dop.register({name: 'John'})
let user2 = dop.register(user)
user === user2 // true
```

```js
let user = dop.register({name: 'John'})
let user2 = dop.register({name: 'John'})
user === user2 // false
```


```js
let userObject = {name: 'John'}
let user = dop.register(userObject)
user === userObject // false
```


> See also
- [createObserver](/api/javascript/createObserver)
- [set](/api/javascript/set)