# Stores

We've seen how nodes are connected and how RPCs work so far. The other part of Dop is to manage the state of your App using Stores and Patches.

Let's see an example where we create a store and clients can subscribe to it.

```js
// Server
import { createStore } from 'dop'

const store = createStore({ players: 0 })

function subscribeToServerStore(listener) {
    // A patch looks like this
    const patch = { players: store.state.players + 1 }
    // We apply the patch and we emit the mutations to all the subscribers
    store.patchAndEmit(patch)
    // Here we subscribe our client
    store.subscribe(listener)
    return store.state
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
    // Notifying subscribers
    store.patchAndEmit(patch)
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

> #### [Patches →](/guide/javascript/patches)
