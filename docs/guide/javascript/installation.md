# Installation

## node.js

To use it in node.js you must have [npm](https://www.npmjs.com/) installed.

```
npm install dop
```

Then you just have to require the library in your script.

```js
const dop = require('dop')
```

## Browsers

If you are using ES6 with babel first you have to install it via npm like in node.js.

```
npm install dop
```

Then you can just import it.

```js
import dop from 'dop'
```


##### With a CDN you have to include the library in your html. We recommend to use [unpkg](https://unpkg.com).

*For the latest minified version*
```html
<script src="https://unpkg.com/dop"></script>
```


*For the latest unminified version*
```html
<script src="https://unpkg.com/dop/dist/browser.js"></script>
```


*For a specific minified version*
```html
<script src="https://unpkg.com/dop@0.11.8/dist/browser.min.js"></script>
```

*For a specific unminified version*
```html
<script src="https://unpkg.com/dop@0.11.8/dist/browser.js"></script>
```

> #### Next step
> [Connecting nodes](/guide/javascript/connecting-nodes)