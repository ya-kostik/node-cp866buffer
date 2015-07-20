# node-cp866buffer
Converting plain utf-8 string to CP866 Buffer

## Installation

```bash
npm install node-cp866buffer
```

## Using

```js
var cp866buffer = require('node-cp866buffer');
```

## Methods

### encode(string)
Method return the Buffer object of UTF-8 **string** converted to CP866 encoding.

```js
var buffer = cp866buffer.encode("Иногда нам приходится страдать");
//<Buffer 88 ad ae a3 a4 a0 20 ad a0 ac 20 af e0 a8 e5 ae a4 a8 e2 e1 ef 20 e1 e2 e0 a0 a4 a0 e2 ec>
```
