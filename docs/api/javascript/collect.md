# collect( [filter_callback] )

> Creates a new [collector](/api/javascript/collector) that listen for mutations.
> Collectors are used to store a bunch of mutations.


## Arguments

#### [filter_callback] `Function`
An optional filter that determines if the mutation must be collected or not.

## Returns

A [collector](/api/javascript/collector) object/class.





## Examples

This code will print `1` twice

```js
const user = dop.register({surname: 'Doe'})
dop.observe(user, mutations => {
    console.log(mutations.length)
})
user.name = 'Josema'
user.surname = 'Gonzalez'
```


An this will print `2` once

```js
const user = dop.register({surname: 'Doe'})
dop.observe(user, mutations => {
    console.log(mutations.length)
})
let collector = dop.collect()
user.name = 'Josema'
user.surname = 'Gonzalez'
collector.emitAndDestroy()
```


Using filter. If the filter function return `true` the mutation will be collected, otherwise will be emitted directly.
This code will print `1` for the surname mutation (we are returning false when it happen) and then will print `2` for the collected mutations.

```js
const user = dop.register({})
dop.observe(user, mutations => {
    console.log(mutations.length)
})
let collector = dop.collect(mutation => mutation.name !== 'surname')
user.name = 'John'
user.surname = 'Doe'
user.birth = 1985
collector.emitAndDestroy()

```


> See also
- [collector](/api/javascript/collector)
- [register](/api/javascript/register)
- [observe](/api/javascript/observe)