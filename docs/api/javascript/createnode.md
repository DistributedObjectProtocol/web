# createNode( [options] )

> Creates a new [Node](/api/javascript/node).

## Arguments

#### [options] `Object`

- *serialize* `function` By default is `JSON.stringify`

- *deserialize* `function` By default is `JSON.parse`

- *rpcFilter* `function` Can be used to block or manipulate the rpc that is going to be created.

## Returns `Object`

A new [Node](/api/javascript/node) instance.

## Example

```js
import { createNode } from 'dop'

const node = createNode({ 
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    rpcFilter: ({ rpc }) => rpc,
})
```
