# set( object, property, new_value )

> Set a new value in a registered object.

> This function is necessary for those environments that do not have [ES6 proxies](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy) available.


## Arguments

#### object `Object`
A registered object.

#### property `String`
Property of the object you want to set.

#### new_value `*`
The new value.



## Returns

The new value.



## Examples

```js
const user = dop.register({name: 'John'})
dop.set(user, 'name', 'Enzo') // 'Enzo'
user.name // 'Enzo'
```


> See also
- [register](/api/javascript/register)
- [del](/api/javascript/del)