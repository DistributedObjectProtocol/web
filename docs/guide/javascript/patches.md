# Patches

A patch describes mutations to be made in our state using plain objects. Is like using [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) but in a more advanced way. 

A quick example.

```js
import { applyPatch } from 'dop'

const target = { a: 1 }
const patch = { a: 2 }

applyPatch(target, patch)
console.log(target) // { a: 2 }
```

Extending

```js
const target = { a: 1 }
const patch = { b: 'World' }
// target
{ a: 1, b: 'World' }
```

Mutating and extending

```js
const target = { a: 1 }
const patch = { a: 'Hello', b: 'World' }
// target
{ a: 'Hello', b: 'World' }
```


Deep mutation

```js
const target = { a: 1, b: { c: false } }
const patch = { b: { c: true } }
// target
{ a: 1, b: { c: true } }
```

```js
const target = {}
const patch = { b: { c: 3 } }
// target
{ b: { c: 3 } }
```

If the patch is an array this will always be replaced

```js
const target = { a: [1, 2, 3] }
const patch = { a: [4] }
// target
{ a: [4] }
```

```js
const target = { a: { b:true } }
const patch = { a: [1,2,3] }
// target
{ a: [1,2,3] }
```


But we can mutate arrays as we do with objects

```js
const target = { a: [1,2,3] }
const patch = { a: { 3: 4 } }
// target
{ a: [1,2,3,4] }
```

```js
const target = { a: [1,2,3,4,5] }
const patch = { a: { length: 1 } }
// target
{ a: [1] }
```


### Delete

We must use a special type in order to delete properties

```js
import { applyPatch, TYPE } from 'dop'

const target = { a: 1, b: 2 }
const patch = { a: TYPE.Delete() }
// target
{ b: 2 }
```

### Replace

You can replace a whole object using the special type Replace

```js
import { applyPatch, TYPE } from 'dop'

const target = { obj: { a: 1, b: 2 } }
const patch = { obj: TYPE.Replace({ c: 3 }) }
// target
{ obj: { c: 3 } }
```

If we would't use Replace the result would be

```js
const target = { obj: { a: 1, b: 2 } }
const patch = { obj: { c: 3 } }
// target
{ obj: { a: 1, b: 2, c: 3 } }
```

### Splice

Splice let us add or remove items directly into arrays. It follow the same API of the [JavaScript splice method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).
```js
import { applyPatch, TYPE } from 'dop'

const target = { array: [1,2,3]}
const patch = { array: TYPE.Splice(1,1,'Hello','World') }
// target
{ array: [1,'Hello','World',3] }
```

### Swap

We can swap items in arrays.

```js
import { applyPatch, TYPE } from 'dop'

const target = { array: [1,2,3]}
const patch = { array: TYPE.Swap(0,2) }
// target
{ array: [3,2,1] }
```


### Multi

Useful when we want to apply multiple operations to the same target.

```js
import { applyPatch, TYPE } from 'dop'

const target = { array: "String"}
const patch = { array: TYPE.Multi(
    [1,2,3],                   // [1,2,3]
    TYPE.Splice(0,0,"Hello"),  // ["Hello",1,2,3]
    TYPE.Splice(4,0,"World"),  // ["Hello",1,2,3,"World"]
    TYPE.Swap(0,4),            // ["World",1,2,3,"Hello"]
    TYPE.Swap(1,3),            // ["World",3,2,1,"Hello"]
)}
// target
{ array:  ["World",3,2,1,"Hello"] }
```


## Unpatch

We can revert any patch using the unpatch value that we obtain with `applyPatch`.

```js
import { applyPatch, TYPE } from 'dop'

const target = { a:1 }
const patch = { a:TYPE.Delete(), b:2 }
const { unpatch } = applyPatch(target, patch)
console.log(target) // { b:2 }
applyPatch(target, unpatch)
console.log(target) // { a:1 }
```

## encode & decode

One of the main feature of dop is that patches can be encoded and decoded to be transfered via HTTP, WebSockets or any other way.


```js
import { encode, decode, TYPE } from 'dop'

const patch = { a:TYPE.Delete(), b:2 }
const encoded = JSON.stringify(encode(patch)) // "{"a":{"$d":0},"b":2}"
decode(JSON.parse(encoded)) // { a:TYPE.Delete(), b:2 }
```

> #### [Stores →](/guide/javascript/stores)
