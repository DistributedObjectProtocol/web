# Observer.observeObject( object )

> Observe all the properties of the registered object.


## Arguments

#### object `Object`
A registered object.



## Returns

A function that will unobserve when executed.




## Examples

This example will observe both mutations.

```js
const user = dop.register({surname: 'Doe'})
const observer = dop.createObserver(mutations => {})
observer.observeObject(user)
user.name = 'Enzo'
user.surname = 'Gonzalez'
```


Unobserving

```js
const user = dop.register({surname: 'Doe'})
const observer = dop.createObserver(mutations => {})
const unobserveUser = observer.observeObject(user)
user.name = 'Enzo' // This will be observed
unobserveUser()
user.surname = 'Gonzalez' // This won't
```


> See also
- [createObserver](/api/javascript/createObserver)
- [register](/api/javascript/register)
