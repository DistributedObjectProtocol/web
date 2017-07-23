# createObserver( callback  )

> Creates a new [`Observer`](/api/javascript/Observer) object that listen for mutations.


## Arguments

#### callback `Function( mutations:Array )`
The function where you want to receive the mutations.

## Returns

A new [`Observer`](/api/javascript/Observer) object.





## Examples


```js
let user = dop.register({surname: 'Doe'})
let observer = dop.createObserver(mutations => {
    let mutation = mutations[0]
    console.log(mutation.object === user) // true
    console.log(mutation.prop) // 'surname'
    console.log(mutation.value) // 'Gonzalez'
    console.log(mutation.oldValue) // 'Doe'
})
observer.observe(user)
user.surname = 'Gonzalez'
```


> See also
- [Observer.observe](/api/javascript/Observer-observe)
- [set](/api/javascript/set)