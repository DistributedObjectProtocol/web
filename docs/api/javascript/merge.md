# merge( object, [sources] )

> Recursively merges sources into object.

## Arguments

#### patch `Any`

## Returns `Any`

## Examples

```js
import { merge, createStore } from 'dop'

const store = createStore({ users: 0 })
const copy = merge({}, store.state)
copy // { users: 0 }
copy === store.state // false
```

