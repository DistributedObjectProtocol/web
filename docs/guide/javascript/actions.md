
# Actions

Actions are functions that mutate objects. You must mutate your register objects only inside of this actions.
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

Now imagine that we want to complete that ToDo:

```js
function completeTodo(index) {
    state.todos[index].completed = true
    state.completedCount += 1
}
```

Observing our two properties:

```js
const observer = dop.createObserver(mutations => {
    renderComponent()
})
observer.observeProperty(state, 'completedCount')
observer.observeProperty(state.todos[0], 'completed')
```

But here is the problem. When we complete this ToDo our component will be rendered twice.

To avoid that, we must use actions:
```js
const completeTodo = dop.action(index => {
    state.todos[index].completed = true
    state.completedCount += 1
})
```

Actions give us the ability to collect a bunch of mutations and emit them grouped. So now, our component will be render only once.


*For a more detailed documentation have a look [action](/api/javascript/action) and [collect](/api/javascript/collect)*





> #### Next step
> [Computed values](/guide/javascript/computed-values)

