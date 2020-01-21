# Node.message( message )

> The way to notify dop of a new message.

## Arguments

#### message `Array`


## Returns `Boolean`

A `Boolean` that identifies if is a valid message/call for dop.

## Examples

```js
ws.on('message', msg => {
    // If we are using WebSockets we will probably need to parse the message
    const isValid = node.message(JSON.parse(msg))
})
```
