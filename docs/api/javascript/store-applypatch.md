# Store.applyPatch( patch )

> Applies a patch to the current state of the store.

## Arguments

#### patch `Any`

The patch to be applied.

## Returns `Array`

An array with a length equal to the listeners size. Each item contains the listener itself and the patch.

## Examples

```js
import { createStore } from 'dop'

const store = createStore({ users: 0 })
store.subscribe(patch => {
    console.log(patch) // { users: 1 }
})
store
  .applyPatch({ users: 1 })
  .forEach(({ listener, patch }) => listener(patch)})
```

Filtering patches

```js
const store = createStore({ users: 0 })
// Subscribing listener1
store.subscribe(listener1)
// Subscribing listener2
store.subscribe(listener2, ({ object, prop, path, oldValue })=>{
    console.log(object) // { users: 1 }
    console.log(prop) // "users"
    console.log(path) // ["users"]
    console.log(oldValue) // 0
    return false // This will avoid the mutation
})

// Patching
const patchesApplied = store.applyPatch({ users: 1 })
patchesApplied[0].patch // { users: 1 }
patchesApplied[1].patch // { }
```


To understand better how patches work visit the [guide](/guide/javascript/patches).