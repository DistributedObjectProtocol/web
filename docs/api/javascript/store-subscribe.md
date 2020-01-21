# Store.subscribe( listener, [filter] )

> Adds a listener function. The listener will be returned when using [applyPatch](/api/javascript/store-applypatch).

## Arguments

#### listener `Function`

The callback to be invoked after patching.

#### filter `Function` Optional

An optional function that filters what mutations have to be applied.

## Returns `Function`

A function that unsubscribes.

## Examples

```js
import { createStore } from 'dop'

const store = createStore({ users: 0 })
const unsubscribe = store.subscribe(patch => {})
store.listeners.size // 1
unsubscribe()
store.listeners.size // 0
```
