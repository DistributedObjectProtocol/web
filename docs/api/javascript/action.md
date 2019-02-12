# action( function )

> Creates a special function that collect a bunch of mutations and emit them grouped. This function is just a wrapper of [collect](/api/javascript/collect)

## Arguments

#### function `Function`

A function with the logic of your mutations.

## Returns

A function.


## Examples
```js
const user = dop.register({ name: 'Enzo' })
const observer = dop.createObserver(mutations => {
    console.log(mutations.length) // 2
})
observer.observeObject(user)
const mutateUser = dop.action((name, surname) =>{
    user.name = name
    user.surname = surname
    return `${name} ${surname}`
})
mutateUser('John', 'Doe') // "John Doe"
```


> See also
- [collect](/api/javascript/collect)