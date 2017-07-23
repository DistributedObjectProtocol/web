# Collector.emitWithoutDestroy()

> Emit all the mutations collected to observers.


## Arguments

## Returns

A [Snapshot](/api/javascript/Snapshot) object/class.


## Examples


```js
let user = dop.register({surname: 'Doe'})
let collector = dop.collect()
user.name = 'Enzo'
user.surname = 'Gonzalez'
console.log(collector.mutations.length) // 2
collector.emitWithoutDestroy()
user.name = 'Josema' // This will be collected
console.log(collector.mutations.length) // 1
```


> See also
- [collect](/api/javascript/collect)
- [register](/api/javascript/register)
- [Snapshot](/api/javascript/Snapshot)