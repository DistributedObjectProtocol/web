# Node.close()

> When node is close, does not process more messages even if we pass them via [Node.message()](/api/javascript/node-message).

## Examples

```js
node.close()
node.opened // false
node.message(message) // false
```
