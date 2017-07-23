# Observer.destroy()

> Unobserve all the observations made with [Observer.observe](/api/javascript/Observer-observe).


## Arguments

## Returns


## Examples


```js
let user = dop.register({surname: 'Doe'})
let observer = dop.createObserver(mutations => {})
observer.observe(user, 'name')
observer.observe(user, 'surname')
user.name = 'Enzo' // This will be observed
observer.destroy()
user.surname = 'Gonzalez' // This won't be observed
```


> See also
- [createObserver](/api/javascript/createObserver)
- [Observer.observe](/api/javascript/Observer-observe)
- [register](/api/javascript/register)