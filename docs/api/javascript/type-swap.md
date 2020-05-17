# TYPE.Swap()

> Swap items in arrays.

## Returns `Object`

## Examples

```js
import { applyPatch, TYPE } from 'dop'

const target = { array: [1,2,3]}
const patch = { array: TYPE.Swap(0,2) }
applyPatch(target, patch)
target // { array: [3,2,1] }
```
