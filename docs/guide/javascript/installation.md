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

##### You can include dop directly from the [unpkg CDN](https://unpkg.com/dop/).

_For the latest minified version_

```html
<script src="https://unpkg.com/dop"></script>
```

_For the latest unminified version_

```html
<script src="https://unpkg.com/dop/dist/dop.js"></script>
```

_For a specific minified version_

```html
<script src="https://unpkg.com/dop@X.X.X/dist/dop.min.js"></script>
```

_For a specific unminified version_

```html
<script src="https://unpkg.com/dop@X.X.X/dist/dop.js"></script>
```

The variable `dop` will be available globally, which will give you access to the top-level exports.

```js
const { createNode, createStore } = dop // global variable: window.dop
```

> #### [Connecting nodes →](/guide/javascript/connecting-nodes)
