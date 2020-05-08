# decode( patch )

> Decodes a patch that has been previously encoded.

## Arguments

#### patch `Any`

## Returns `Any`

## Examples

```js
import { encode, decode, TYPE } from 'dop'

const encoded = encode({ prop: TYPE.Delete() }) // { prop: { $d: 0 } }
decode(encoded) // { prop: TYPE.Delete() }
```

