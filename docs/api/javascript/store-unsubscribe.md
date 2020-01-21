# Store.unsubscribe( listener )

> Removes the listener function previously added with [subscribe](/api/javascript/store-subscribe).

## Arguments

#### listener `Function`

The listener function.

## Examples

```js
const listener = patch => {}
store.subscribe(listener)
store.listeners.size // 1
store.unsubscribe(listener)
store.listeners.size // 0
```
