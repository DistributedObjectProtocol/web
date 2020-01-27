# applyPatch( target, patch )

> Applies a patch to the target.

## Arguments

#### target `Any`

The object you want to mutate. Usually an object.

#### patch `Any`

The patch to be applied.

## Returns `Object`

- *result* `Any` The result after appliying the patch.

- *unpatch* `Any` The output to reverse the patch.

- *mutations* `Array` An array with all the mutations applied.


## Examples

```js
import { applyPatch, TYPE } from 'dop'

const object = { a: 1 }
const patch = { b: 2 }
const { result, unpatch, mutations } = applyPatch(object, patch)
result // { a: 1, b: 2 }
unpatch // { a: 1, b: TYPE.Delete }
mutations.length // 1
mutations[0] // { 'oldValue':TYPE.Delete, 'object', 'prop':'b', 'path':['b'] }
```


```js
const object = { a: 1 }
const patch = [1,2,3]
const { result, unpatch, mutations } = applyPatch(object, patch)
result // [1,2,3]
```


To understand better how patches work check out the [guide](/guide/javascript/patches).