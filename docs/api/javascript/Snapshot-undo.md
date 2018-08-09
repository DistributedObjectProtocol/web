# Snapshot.undo()

> Revert the state based on the mutations collected.


## Arguments

## Returns



## Examples


```js
let user = dop.register({name: 'John', surname: 'Doe'})
let collector = dop.collect()
user.name = 'Enzo'
user.surname = 'Gonzalez'
let snapshot = collector.emit()
console.log(`${user.name} ${user.surname}`) // Enzo Gonzalez
snapshot.undo()
console.log(`${user.name} ${user.surname}`) // John Doe
```


> See also
- [Collector.emit](/api/javascript/Collector-emit)
- [Snapshot.redo](/api/javascript/Snapshot-redo)