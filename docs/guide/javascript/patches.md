# Patches

A patche describes mutations to be made in our state using plain objects. Is like using [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) but in a more advanced way.

Let's learn the syntax

```json
// target
{
    a: 1
}

// patch
{
    a: 2
}

// result
{
    a: 2
}
```

New properties

```js
// target
{ a: 1, b: 2 }

// patch
{ a: null, c: 3 }

// result
{ a: null, b: 2, c: 3 }
```

# API

A quick example using the API

```js
import { applyPatch } from 'dop'

const object = { a: 1, b: 2 }
const patch = { a: null, c: 3 }

applyPatch(object, patch)
console.log(patch) // { a:null, b:2, c:3 }
```
