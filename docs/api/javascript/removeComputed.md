# removeComputed( object, property, [function] )

> Remove computed values.



## Arguments

#### object `Object`
A registered object.

#### property `String`
Property of the object.

#### function `Function` optional
Function of the computed value to remove. This argument is optional, not passing function removeComputed will remove all computed values would have.


## Returns

An array with the functions of the removed computed values.



## Examples

```js
let user = dop.register({
    name: 'John',
    surname: 'Doe',
    fullname: dop.computed(function() {
        return `${this.name} ${this.surname}` 
    })
})
console.log(user.fullname) // 'John Doe'
user.name = 'Enzo'
console.log(user.fullname) // 'Enzo Doe'
dop.removeComputed(user, 'fullname')
user.name = 'Josema' 
console.log(user.fullname) // 'Enzo Doe'
```




> See also
- [addComputed](/api/javascript/addComputed)
- [removeComputed](/api/javascript/removeComputed)
- [computed](/api/javascript/computed)
