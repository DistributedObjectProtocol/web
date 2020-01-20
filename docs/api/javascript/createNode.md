# createNode( [options] )

> Creates a new [Node](/api/javascript/node).

## Arguments

#### [options] `Object`

- *max_remote_functions* `number` By default is Infinity

## Returns

A new [Node](/api/javascript/node) instance.

## Example

```js
import { createNode } from "dop"

const node = createNode({ max_remote_functions: 5 })
```
