# Snapshot.redo()

> Put back the original state that has been collected. It works only after executing [Snapshot.undo](/api/javascript/Snapshot-undo).


## Arguments

## Returns



## Examples


```js
let user = dop.register({name: 'John', surname: 'Doe'})
let collector = dop.collect()
user.name = 'Enzo'
user.surname = 'Gonzalez'
var snapshot = collector.emit()
console.log(`${user.name} ${user.surname}`) // Enzo Gonzalez
snapshot.undo()
console.log(`${user.name} ${user.surname}`) // John Doe
snapshot.redo()
console.log(`${user.name} ${user.surname}`) // Enzo Gonzalez
```


> See also
- [Collector.emit](/api/javascript/Collector-emit)
- [Snapshot.undo](/api/javascript/Snapshot-undo)