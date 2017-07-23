# Installation

## node.js

To use it in node.js you must have [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com) installed.

```
npm install dop
```

```
yarn add dop
```

Then you just have to require the library in your script.

```js
const dop = require('dop')
```

## Browsers

If you are using ES6 and you already have installed the package

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
<script src="https://unpkg.com/dop/dist/dop.js"></script>
```


*For a specific minified version*
```html
<script src="https://unpkg.com/dop@X.X.X/dist/dop.min.js"></script>
```

*For a specific unminified version*
```html
<script src="https://unpkg.com/dop@X.X.X/dist/dop.js"></script>
```

> #### Next step
> [Register object](/guide/javascript/register-object)