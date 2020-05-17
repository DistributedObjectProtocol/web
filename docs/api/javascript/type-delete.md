# TYPE.Delete()

> Deletes a property when applying a patch.

## Returns `Object`

## Examples

```js
import { applyPatch, TYPE } from 'dop'

const target = { hello: 'hola', world: 'mundo' }
const patch = { world: TYPE.Delete() }
applyPatch(target, patch)
target // { hello: 'hola' }
```
