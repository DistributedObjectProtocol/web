# computed( function )

> Computed values are values that can be derived from the existing state or other computed values.



## Arguments

#### function `Function`
Function where are the other values to create the result.


## Returns
The computed value result.



## Examples

```js
const user = dop.register({
    name: 'John',
    surname: 'Doe',
    fullname: dop.computed(function() { // You can't use arrow function here because we need the `this` scope
        return `${this.name} ${this.surname}` 
    })
})
console.log(user.fullname) // 'John Doe'
user.name = 'Enzo'
console.log(user.fullname) // 'Enzo Doe'
```

Adding it after

```js
const user = dop.register({
    name: 'John',
    surname: 'Doe',
})
user.fullname = dop.computed(() => `${user.name} ${user.surname}`)
user.fullname // 'John Doe'
```

This allows you to add multiple computed values to the same property.


> See also
- [register](/api/javascript/register)
- [removeComputed](/api/javascript/removeComputed)