# Observer.destroy()

> Unobserve all the observations made previously.


## Arguments

## Returns


## Examples


```js
const user = dop.register({surname: 'Doe'})
const observer = dop.createObserver(mutations => {})
observer.observeProperty(user, 'surname')
user.surname = 'Gonzalez' // This will be observed
observer.destroy()
user.surname = 'Smith' // This won't be observed
```


> See also
- [createObserver](/api/javascript/createObserver)
- [Observer.observeProperty](/api/javascript/Observer-observeProperty)
- [register](/api/javascript/register)