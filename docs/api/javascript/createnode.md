# createNode( [options] )

> Creates a new [Node](/api/javascript/node).

## Arguments

#### [options] `Object`

- *serialize* `function` By default is `JSON.stringify`

- *deserialize* `function` By default is `JSON.parse`

- *max_remote_functions* `number` By default is Infinity

## Returns `Object`

A new [Node](/api/javascript/node) instance.

## Example

```js
import { createNode } from "dop"

const node = createNode({ 
    serialize: compressFunction,
    deserialize: uncompressFunction,
    max_remote_functions: 5
})
```
