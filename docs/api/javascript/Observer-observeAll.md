# Observer.observeAll( object )

> Observe the whole tree of the object.


## Arguments

#### object `Object`
A registered object.



## Returns

A function that will unobserve when executed.




## Examples

This example will observe both mutations.

```js
const data = dop.register({
    a: true,
    b: {
        b1: false,
        b2: {
            b21: false
        }
    }
})
const observer = dop.createObserver(mutations => {})
observer.observeAll(data.b)
data.a = false // this won't be observed
data.b.b1 = true // this will be observed
data.b.b2.b21 = true // this will be observed
```


Unobserving

```js
const user = dop.register({surname: 'Doe'})
const observer = dop.createObserver(mutations => {})
const unobserveUser = observer.observeAll(user)
user.name = 'Enzo' // This will be observed
unobserveUser()
user.surname = 'Gonzalez' // This won't
```


> See also
- [createObserver](/api/javascript/createObserver)
- [register](/api/javascript/register)
