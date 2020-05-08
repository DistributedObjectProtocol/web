# Installation

## Package Manager

You must have [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com) installed.

```sh
npm install dop
# or
yarn add dop
```

Then you just have to require the library in your code.

```js
const { createNode, createStore } = require('dop')
// or with ES6
import { createNode, createStore } from 'dop'
```

## CDNs

_Using [Unpkg](https://unpkg.com/dop/)_

```html
<script src="https://unpkg.com/dop"></script>
```

_Using [JSDeliver](https://www.jsdelivr.com/package/npm/dop)_

```html
<script src="https://cdn.jsdelivr.net/npm/dop/dist/dop.umd.js"></script>
```

The variable `dop` will be available globally, which will give you access to the top-level exports.

```js
const { createNode, createStore } = dop // global variable: window.dop
```

> #### [Patches →](/guide/javascript/patches)
