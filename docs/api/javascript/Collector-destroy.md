# Collector.destroy()

> Destroy the observer and won't store more mutations.


## Arguments

## Returns



## Examples


```js
const user = dop.register({surname: 'Doe'})
const collector = dop.collect()
user.surname = 'Gonzalez'
console.log(collector.mutations.length) // 1
collector.destroy()
user.name = 'Josema' // This won't be collected
console.log(collector.mutations.length) // 1
// But we can still emit the first mutation
collector.emit()
console.log(collector.mutations.length) // 0
```


> See also
- [collect](/api/javascript/collect)
- [register](/api/javascript/register)