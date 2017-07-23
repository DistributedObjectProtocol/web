# del( object, property )

> Delete a specific property. Equivalent to `delete object.property`

> This function is necessary for those environments that do not have [ES6 proxies](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy) available.



## Arguments

#### object `Object`
A registered object.

#### property `String`
Property of the object you want to delete.





## Returns

`false`



## Examples

```js
let user = dop.register({name: 'John'})
dop.del(user, 'name') // false
user.name // undefined
```


> See also
- [register](/api/javascript/register)
- [set](/api/javascript/set)