# register( object )

> Make a object observable that can be listen for mutations.

## Arguments

#### object `Object|Array`
An regular object or an array.

## Returns

A [ES6 proxy](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy) object ready to be observed.


## Examples

```js
const user = dop.register({name: 'John'})
user.name // 'John'
```

```js
const user = dop.register({name: 'John'})
const user2 = dop.register(user)
user === user2 // true
```

```js
const user = dop.register({name: 'John'})
const user2 = dop.register({name: 'John'})
user === user2 // false
```


```js
const userObject = {name: 'John'}
const user = dop.register(userObject)
user === userObject // false
```


> See also
- [observe](/api/javascript/observe)
- [observeProperty](/api/javascript/observeProperty)
- [collect](/api/javascript/collect)