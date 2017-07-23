
# Actions (Collectors)

Actions are functions that mutate the registered objects. You must mutate your registered objects only inside of this actions.
If you are familiar with the MVC pattern, actions are like Controllers. 

The mutation that we've seen before must be inside of a function.

```js
function addTodo(text) {
    state.todos.push({
        text: todo,
        completed: false
    })
}
```

Now imagine that we want to complete that ToDo.

```js
function completeTodo(index) {
    state.todos[index].completed = true
    state.completedCount += 1
}
```

But here is one problem. Imagine we have an observer that is observing the two properties that we are mutating:

```js
const observer = dop.createObserver(mutations => {
    renderComponent()
})
observer.observe(state, 'completedCount')
observer.observe(state.todos[0], 'completed')
```

When we complete this ToDo our component will be rendered twice.

To avoid that, we must use collectors:
```js
function completeTodo(index) {
    const collector = dop.collect()
    state.todos[index].completed = true
    state.completedCount += 1
    collector.emit()
}
```

Collectors give us the ability to collect a bunch of mutations and emit them grouped. So now, our component will be render only once.


*For a more detailed documentation have a look [collect](/api/javascript/collect)*





> #### Next step
> [Computed values](/guide/javascript/computed-values)

