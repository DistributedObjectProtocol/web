# TYPE.Replace()

> Replaces a whole object when applying a patch.

## Returns `Object`

## Examples

```js
import { applyPatch, TYPE } from 'dop'

const object = { data: { a:1, b:2 } }
const patch = { data: TYPE.Replace({ c:3 }) }
applyPatch(object, patch)
object // { data: { c:3 } }
```
