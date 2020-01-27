# Patches

A patche describes mutations to be made in our state using plain objects. Is like using [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) but in a more advanced way. 

A quick example.

```js
import { applyPatch } from 'dop'

const object = { a: 1 }
const patch = { a: 2 }

applyPatch(object, patch)
console.log(object) // { a: 2 }
```

Creating

```js
const object = { a: 1 }
const patch = { b: 'World' }
// object
{ a: 1, b: 'World' }
```

Mutating and creating

```js
const object = { a: 1 }
const patch = { a: 'Hello', b: 'World' }
// object
{ a: 'Hello', b: 'World' }
```

Deep mutation

```js
const object = { a: 1, b: { c: 3 } }
const patch = { b: { c: null } }
// object
{ a: 1, b: { c: null } }
```

```js
const object = {}
const patch = { b: { c: 3 } }
// object
{ b: { c: 3 } }
```

## Arrays

Arrays are immutables, which means are always replaced. So in order to mutate arrays you must create a new array. Or use methods like `.slice`, `.concat` or any other that creates a copy of the array. 

```js
const object = { a: [1, 2, 3], b:false }
const patch = { a: [4] }
// object
{ a: [4], b: false }
```

You can not mutate inner object of arrays

```js
const object = { array: [1,2,3] }
const patch = { array: { 3: 4 } }
// object
{ array: { 3: 4 } }
```

You should do something like

```js
const object = { array: [1,2,3] }
const patch = { array: object.array.concat(4) }
// object
{ array: [1,2,3,4] }
```



## Delete

We must use a special type in order to delete properties

```js
import { applyPatch, TYPE } from 'dop'

const object = { a: 1, b: 2 }
const patch = { a: TYPE.Delete }

applyPatch(object, patch)
// object
{ b: 2 }
```

## Replace

You can replace a whole object using the special type Replace

```js
import { applyPatch, TYPE } from 'dop'

const object = { obj: { a: 1, b: 2 } }
const patch = { obj: TYPE.Replace({ c: 3 }) }

applyPatch(object, patch)
// object
{ obj: { c: 3 } }
```

If we would't use Replace the result would be

```js
const object = { obj: { a: 1, b: 2 } }
const patch = { obj: { c: 3 } }

applyPatch(object, patch)
// object
{ obj: { a: 1, b: 2, c: 3 } }
```

[Learn more](https://github.com/DistributedObjectProtocol/protocol#Patches) about the specification.