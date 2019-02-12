# createObserver( callback  )

> Creates a new [`Observer`](/api/javascript/Observer) object that listen for mutations.


## Arguments

#### callback `Function( mutations:Array )`
The function where you want to receive the mutations.

## Returns

A new [`Observer`](/api/javascript/Observer) object.





## Examples


```js
const user = dop.register({ surname: 'Doe' })
const observer = dop.createObserver(mutations => {
    const mutation = mutations[0]
    console.log(mutation.object === user) // true
    console.log(mutation.prop) // 'surname'
    console.log(mutation.value) // 'Gonzalez'
    console.log(mutation.oldValue) // 'Doe'
})
observer.observeObject(user)
user.surname = 'Gonzalez'
```


> See also
- [Observer.observeObject](/api/javascript/Observer-observeObject)
- [set](/api/javascript/set)