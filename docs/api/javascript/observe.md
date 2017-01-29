# observe( object, callback  )

> Observe all the mutations of the specific object.


## Arguments

#### object `Object`
A registered object

#### callback `Function( [mutations] )`
The function where you want to receive the mutations.

## Returns

A function that can be executed to unobserve. Is the equivalent of calling [`unobserve`](/api/javascript/unobserve).





## Examples


```js
const user = dop.register({surname: 'Doe'})
dop.observe(user, mutations => {
    let mutation = mutations[0]
    console.log(mutation.object === user) // true
    console.log(mutation.name) // 'surname'
    console.log(mutation.value) // 'Gonzalez'
    console.log(mutation.oldValue) // 'Doe'
})
user.surname = 'Gonzalez'
```

For new properties `oldValue` it's undefined

```js
dop.observe(user, mutations => {
    let mutation = mutations[0]
    console.log(mutation.name) // 'name'
    console.log(mutation.value) // 'Josema'
    console.log(mutation.oldValue) // undefined
})
user.name = 'Josema'
```


Deleting a property `value` will be undefined

```js
dop.observe(user, mutations => {
    let mutation = mutations[0]
    console.log(mutation.name) // 'surname'
    console.log(mutation.value) // undefined
    console.log(mutation.oldValue) // 'Gonzalez'
})
delete user.surname
```



Arrays have a different format

```js
const myarray = dop.register(['A','B','C','D'])
dop.observe(myarray, mutations => {
    let mutation1 = mutations[0]
    console.log(mutation1.object === myarray) // true
    console.log(mutation1.splice) // [ 4, 0, 'E' ]

    let mutation2 = mutations[1]
    console.log(mutation2.object === myarray) // true
    console.log(mutation2.name) // 'length'
    console.log(mutation2.value) // 5
    console.log(mutation2.oldValue) // 4
})
let collector = dop.collect()
myarray.push('E')
collector.emitAndDestroy()
console.log(myarray) // ['A','B','C','D','E']
```

```js
const myarray = dop.register(['A','B','C','D'])
dop.observe(myarray, mutations => {
    let mutation = mutations[0]
    console.log(mutation.object === myarray) // true
    console.log(mutation.swaps) // [ 0, 3, 1, 2 ]
})
myarray.reverse()
console.log(myarray) // [ 'D', 'C', 'B', 'A' ]
```


Stop being observable

```js
const myobject = dop.register({year: 2017})
const stopObserving = dop.observe(myobject, mutations => {
    console.log(mutations)
})
myobject.year = 2018 // this will print the mutation
stopObserving()
myobject.year = 2019 // this won't print anything
```



> See also
- [register](/api/javascript/register)
- [collect](/api/javascript/collect)