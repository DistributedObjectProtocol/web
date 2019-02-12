# Observer.pause()

> Pause the collector and won't store more mutations until it [resumes](/api/javascript/Collector-resume).


## Arguments

## Returns



## Examples


```js
const user = dop.register({surname: 'Doe'})
const collector = dop.collect()
user.surname = 'Gonzalez'
collector.pause()
user.name = 'Josema' // This won't be collected
collector.resume()
user.name = 'Enzo'
console.log(collector.mutations.length) // 2
```


> See also
- [Collector.resume](/api/javascript/Collector-resume)
- [collect](/api/javascript/collect)
- [register](/api/javascript/register)