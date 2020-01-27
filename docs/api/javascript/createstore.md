# createStore( state )

> Creates a new [Store](/api/javascript/store).

## Arguments

#### state `Any`

The initial state of your app.

## Returns `Object`

A new [Store](/api/javascript/store) instance.

## Example

```js
import { createStore } from 'dop'

const store = createStore({ books: 0 })
store.state // { books: 0 }
```
