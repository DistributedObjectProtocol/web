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
// Subscribing
store.subscribe(patch => {
    console.log(patch) // { users: 1 }
})
// Patching and Emiting
store
  .applyPatch({ users: 1 })
  .forEach(({ listener, patch }) => listener(patch)})
```

Filtering patches

```js
const store = createStore({ users: 0 })
// Subscribing listener1
store.subscribe(listener1)
// Subscribing listener2 with a filter
store.subscribe(listener2, function filter({ object, prop, path, old_value }) {
    console.log(object) // { users: 1 }
    console.log(prop) // 'users'
    console.log(path) // ['users']
    console.log(old_value) // 0
    return false // This will avoid the mutation
})

// Patching
const patchesApplied = store.applyPatch({ users: 1 })
patchesApplied[0].mutations.length // 1
patchesApplied[0].patch // { users: 1 }
patchesApplied[0].unpatch // { users: 0 }

patchesApplied[1].mutations.length // 0
patchesApplied[1].patch // { }
patchesApplied[1].unpatch // { }
```

The array returned has two extra properties 

```js
const store = createStore({ users: 0, games: 0 })
const { unpatch, mutations } = store.applyPatch({ users: 1 })
store.state // { users: 1, games: 0 }
unpatch // { users: 0 }
mutations.length // 1

store.applyPatch(unpatch)
store.state // { users: 0, games: 0 }
```



To understand better how patches work check out the [guide](/guide/javascript/patches).