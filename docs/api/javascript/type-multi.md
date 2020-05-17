# TYPE.Multi()

> Useful to apply multiple operations to the same target.

## Returns `Object`

## Examples

```js
import { applyPatch, TYPE } from 'dop'

const target = { array: "String Value"}
const patch = { array: TYPE.Multi(
    [1,2,3],                   // [1,2,3]
    TYPE.Splice(0,0,"Hello"),  // ["Hello",1,2,3]
    TYPE.Splice(4,0,"World"),  // ["Hello",1,2,3,"World"]
    TYPE.Swap(0,4),            // ["World",1,2,3,"Hello"]
    TYPE.Swap(1,3),            // ["World",3,2,1,"Hello"]
)}
applyPatch(target, patch)
target // { array:  ["World",3,2,1,"Hello"] }
```
