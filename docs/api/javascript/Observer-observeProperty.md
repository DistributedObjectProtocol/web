
# Observer.observeProperty( object, property )

> Observe a property.


## Arguments

#### object `Object`
A registered object.

#### property `String`
The property to observe.

## Returns

A function that will unobserve when executed.





## Examples

This example will observe surname only

```js
const user = dop.register({ surname: 'Doe' })
const observer = dop.createObserver(mutations => {})
observer.observeProperty(user, 'surname')
user.surname = 'Gonzalez'
```



Unobserving

```js
const user = dop.register({ surname: 'Doe' })
const observer = dop.createObserver(mutations => {})
const unobserveUser = observer.observeProperty(user, 'surname')
user.surname = 'Gonzalez' // This will be observed
unobserveUser()
user.surname = 'Smith' // This won't
```


> See also
- [createObserver](/api/javascript/createObserver)
- [register](/api/javascript/register)
