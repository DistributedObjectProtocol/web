# TYPE.Replace()

> Replaces a whole object when applying a patch.

## Returns `Object`

## Examples

```js
import { applyPatch, TYPE } from 'dop'

const target = { data: { a:1, b:2 } }
const patch = { data: TYPE.Replace({ c:3 }) }
applyPatch(target, patch)
target // { data: { c:3 } }
```
