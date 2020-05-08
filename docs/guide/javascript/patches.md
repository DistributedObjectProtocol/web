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

## Types


### Delete

We must use a special type in order to delete properties

```js
import { applyPatch, TYPE } from 'dop'

const target = { a: 1, b: 2 }
const patch = { a: TYPE.Delete }
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

applyPatch(target, patch)
// object
{ obj: { a: 1, b: 2, c: 3 } }
```

### Splice
### Swap
### Multi


## Unpatch
## Mutations



> #### [Stores →](/guide/javascript/stores)
