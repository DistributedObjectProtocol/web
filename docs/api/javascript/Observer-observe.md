# Observer.observe( object, [property]  )

> Observe a property or all the properties of the registered object.


## Arguments

#### object `Object`
The registered object.

#### property `String` optional
The property to observe. If property is not passed, observe() will observe all the properties of object.

## Returns

A function that will unobserve when executed.





## Examples

This example will observe surname only

```js
let user = dop.register({surname: 'Doe'})
let observer = dop.createObserver(mutations => {})
observer.observe(user, 'surname')
user.name = 'Enzo'
user.surname = 'Gonzalez'
```

This example will observe both properties

```js
let user = dop.register({surname: 'Doe'})
let observer = dop.createObserver(mutations => {})
observer.observe(user)
user.name = 'Enzo'
user.surname = 'Gonzalez'
```


Unbserving

```js
let user = dop.register({surname: 'Doe'})
let observer = dop.createObserver(mutations => {})
let unobserveUser = observer.observe(user)
user.name = 'Enzo' // This will be observed
unobserveUser()
user.surname = 'Gonzalez' // This won't



> See also
- [createObserver](/api/javascript/createObserver)
- [register](/api/javascript/register)