# Stores


Stores are used to manage the state of our APP. First we have to create a store with our initial state.

```js
import { createStore } from 'dop';

const store = createStore({ red: 0, blue: 0 });
```

Then we subscribe to that store.

```js
store.subscribe(patch => {
    console.log('patch', patch)
    // rerender component
})
```

And finally we apply a patch and notify the listener.

```js
const listeners = store.applyPatch({ red:1 })

listeners.forEach(({ listener, patch }) => listener(patch))
```


### Unsubscribe

This is one way to unsubscribe.

```js
const unsubscribe = store.subscribe(patch => {})
store.listeners.size // 1
unsubscribe()
store.listeners.size // 0
```

This is the other way.

```js
const listener = patch => {}
store.subscribe(listener)
store.listeners.size // 1
store.unsubscribe(listener)
store.listeners.size // 0
```


### Filtering

When subscribing, the second argument can be a function that filters what patches must be ignored.

```js
const store = createStore({ users: 0 })
// Subscribing listener1
store.subscribe(listenerFunction1)
// Subscribing listener2 with a filter
store.subscribe(listenerFunction2, () => false)

// Patching
const listeners = store.applyPatch({ users: 1 })
listeners.length // 2
listeners[0].mutations.length // 1
listeners[0].patch // { users: 1 }
listeners[0].unpatch // { users: 0 }

listeners[1].mutations.length // 0
listeners[1].patch // { }
listeners[1].unpatch // { }
```

If we don't pass filter, by default is a function that always returns true. `()=>true`

> #### [Connecting nodes →](/guide/javascript/connecting-nodes)


<!-- 
## Connecting stores

We've seen how nodes are connected and how RPCs work so far. Let's see an example where we create a store in the server and clients can subscribe to it.

```js
// Server
import { createStore } from 'dop'

const store = createStore({ players: 0 })

function subscribeToServerStore(listener) {
    const { state } = store
    // Incrementing number of player as a patch
    const listeners = store.applyPatch({ players: state.players + 1 })
    // We emit the patch to all the subscribers
    listeners.forEach(({ listener, patch }) => listener(patch))
    // Here we subscribe our client
    store.subscribe(listener)
    return state
}
```

We can now subscribe doing this

```js
// Client
import { createStore } from 'dop'

// Getting the current state of the server and subscribing to it
const state = await subscribeToServerStore(onPatch)
// Creates a local store where our UX components can subscribe to
const store = createStore(state)

function onPatch(patch) {
    // Applying patch from the server
    const listeners = store.applyPatch(patch)
    // We emit the patch to all the subscribers
    listeners.forEach(({ listener, patch }) => listener(patch))
}
```

This is how we would unsubscribe

```js
// Server
function unsubscribeToServerStore(listener) {
    store.unsubscribe(listener)
}

// Client
unsubscribeToServerStore(onPatch)
```

> #### [Connecting nodes →](/guide/javascript/connecting-nodes) -->
