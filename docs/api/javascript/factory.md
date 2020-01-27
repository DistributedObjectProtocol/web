# factory()

> It creates a clone of the dop object. It could be useful when you need to emulate different enviroments on the same script.


## Returns `Object`

## Examples

```js
import dop from 'dop'

const dopServer = dop.factory()
const dopClient = dop.factory()
dop === dopClient // false
dopServer === dopClient // false

const nodeServer = dopServer.createNode()
const nodeClient = dopClient.createNode()
```

