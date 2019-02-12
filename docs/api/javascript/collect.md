# collect( [index_function] )

> Creates a new [Collector](/API/javascript/Collector) that will store new mutations.

> Collectors are used to store a bunch of mutations and emit them when need it.


## Arguments

#### [index_function] `Function( collectors:Array )`
An optional filter that determines the position of the new collector. 
The function must return a Number with the position where it has to be located.
By default will be located at the end.

## Returns

A [Collector](/api/javascript/Collector) object/class.





## Examples


This code will print `1` twice

```js
const user = dop.register({surname: 'Doe'})
const observer = dop.createObserver(mutations => {
    console.log(mutations.length)
})
observer.observeObject(user)
user.name = 'Josema'
user.surname = 'Gonzalez'
```


An this will print `2` once

```js
const user = dop.register({surname: 'Doe'})
const observer = dop.createObserver(mutations => {
    console.log(mutations.length)
})
observer.observeObject(user)
const collector = dop.collect()
user.name = 'Josema'
user.surname = 'Gonzalez'
collector.emit()
```




```js
const user = dop.register({surname: 'Doe'})
const collector = dop.collect()
console.log(collector.mutations.length) // 0
user.surname = 'Gonzalez'
console.log(collector.mutations.length) // 1
```


Multiple collectors

```js
const user = dop.register({surname: 'Doe'})
const collectorA = dop.collect()
const collectorB = dop.collect()
user.surname = 'Gonzalez'
console.log(collectorA.mutations.length) // 1
console.log(collectorB.mutations.length) // 0
collectorA.emit()
user.name = 'Josema'
// collectorA won't receive more mutations
console.log(collectorA.mutations.length) // 0
console.log(collectorB.mutations.length) // 1
```


Using `index_function`

```js
const user = dop.register({surname: 'Doe'})
const collectorA = dop.collect()
const collectorB = dop.collect(collectors => 0) // Position 0 of the array. It means the begining
user.surname = 'Gonzalez'
console.log(collectorA.mutations.length) // 0
console.log(collectorB.mutations.length) // 1
```



> See also
- [Collector.emit](/api/javascript/Collector-emit)
- [register](/api/javascript/register)
- [createObserver](/api/javascript/createObserver)