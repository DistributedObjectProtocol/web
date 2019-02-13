
# Computed values

Computed values are values that can be derived from the existing state or other computed values. Conceptually, they are very similar to formulas in spreadsheets.

In our ToDo app we have a property called `completedCount` that we manually have to update every time we complete a todo.

const's turn that property into a computed value:
```js
const state = dop.register({
    todos: [],
    completedCount: dop.computed(function(){
        return this.todos.reduce(
            (sum, todo) => sum + (todo.completed ? 1 : 0),
            0
        );
    })
})
console.log(state.completedCount) // 0
```

We can now add a ToDo manually and `completedCount` will be updated automatically

```js
state.todos.push({completed:false, text:'Example 1'})
console.log(state.completedCount) // 0
state.todos.push({completed:true, text:'Example 2'})
console.log(state.completedCount) // 1
state.todos[0].completed = true
console.log(state.completedCount) // 2
```

*For a more detailed documentation have a look [computed](/api/javascript/computed)*


> #### Next step
> [Connecting nodes](/guide/javascript/connecting-nodes)

