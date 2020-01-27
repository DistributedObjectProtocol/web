# encode( patch )

> Encodes a patch that will be sent to the other side.

## Arguments

#### patch `Any`

## Returns `Any`

## Examples

```js
import { encode, TYPE } from 'dop'

encode({ prop: TYPE.Delete() })          // { prop: { $d: 0 } }
encode({ prop: TYPE.Replace({ b: 2 }) }) // { prop: { $r: { b: 2 } } }
```