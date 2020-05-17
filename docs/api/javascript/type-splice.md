# TYPE.Splice()

> Splice let us add or remove items directly into arrays. It follow the same API of the JavaScript splice method.

## Returns `Object`

## Examples

```js
import { applyPatch, TYPE } from 'dop'

const target = { array: [1,2,3]}
const patch = { array: TYPE.Splice(1,1,'Hello','World') }
applyPatch(target, patch)
target // { array: [1,'Hello','World',3] }
```
