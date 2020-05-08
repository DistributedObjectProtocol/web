# applyPatch( target, patch )

> Applies a patch to the target.

## Arguments

#### target `Any`

The object or array you want to mutate.

#### patch `Any`

The patch to be applied.

## Returns `Object`

- *result* `Any` The result after appliying the patch.

- *unpatch* `Any` The output to reverse the patch.

- *mutations* `Array` An array with all the mutations applied.


## Examples

```js
import { applyPatch, TYPE } from 'dop'

const target = { a: 1 }
const patch = { b: 2 }
const { result, unpatch, mutations } = applyPatch(target, patch)
result // { a: 1, b: 2 }
unpatch // { a: 1, b: TYPE.Delete }
mutations.length // 1
mutations[0] // { old_value:TYPE.Delete, target, prop:'b', path:['b'] }
```


```js
const target = { a: 1 }
const patch = [1, 2, 3]
const { result, unpatch, mutations } = applyPatch(target, patch)
result // [1,2,3]
```


To understand better how patches work check out the [guide](/guide/javascript/patches).