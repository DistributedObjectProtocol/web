# Observer.resume()

> Resumes the collector previously [paused](/api/javascript/Collector-pause).


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
- [Collector.pause](/api/javascript/Collector-pause)
- [collect](/api/javascript/collect)
- [register](/api/javascript/register)