# Node.message( message )

> The way to notify dop of a new message.

## Arguments

#### message `Array`


## Returns `Boolean`

A `Boolean` that identifies if is a valid message/call for dop.

## Examples

```js
ws.on('message', msg => {
    const isValid = node.message(msg)
})
```
