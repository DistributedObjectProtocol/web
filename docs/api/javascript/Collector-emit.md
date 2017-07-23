# Collector.emit()

> Emit all the mutations collected to observers and destroy it.


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
collector.emit()
user.name = 'Josema' // This won't be collected
console.log(collector.mutations.length) // 0
```


> See also
- [collect](/api/javascript/collect)
- [register](/api/javascript/register)
- [Snapshot](/api/javascript/Snapshot)