# observeProperty( object, property, callback )

> Observe all the mutations of the specific property.

## Arguments

#### object `Object` 
A registered object.

#### property `String` 
The property of the object.

#### callback `Function`
The function where you want to receive the mutations.


## Returns

A function that can be executed to unobserve. Is the equivalent of calling [`unobserveProperty`](/api/javascript/unobserveProperty).


## Examples

```js
const user = dop.register({surname: 'Doe'})
dop.observeProperty(user, 'surname', mutation => {
    console.log(mutation.object === user) // true
    console.log(mutation.name) // 'surname'
    console.log(mutation.value) // 'Gonzalez'
    console.log(mutation.oldValue) // 'Doe'
})
user.surname = 'Gonzalez' // this mutation will be printed
user.birth = 1985 // this mutation won't be printed
```

Stop being observable

```js
const user = dop.register({surname: 'Doe'})
const stopObserving = dop.observeProperty(user, 'surname', mutation => {
    console.log(mutation)
})
user.surname = 'Gonzalez' // this will print the mutation
stopObserving()
user.surname = 'Other surname' // this won't print anything
```



> See also
- [register](/api/javascript/register)
- [observe](/api/javascript/observe)

