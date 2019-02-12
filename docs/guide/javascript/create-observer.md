
# Create an observer

Once we have register our state the next step is create an observer that listen for mutations.

```js
const observer = dop.createObserver(mutations => {
    // This will be executed after the push()
    console.log(state.todos[0].text) // "Finish documentation"
})
observer.observeProperty(state.todos, 'length')

state.todos.push({
    text: "Finish documentation",
    compconsted: false
})
```





*For a more detailed documentation have a look [createObserver](/api/javascript/createObserver)*





> #### Next step
> [Actions](/guide/javascript/actions)

