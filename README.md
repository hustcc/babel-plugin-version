# babel-plugin-version

A babel plugin replace define Identifier / StringLiteral to pkg.version!

[![npm](https://img.shields.io/npm/v/babel-plugin-version.svg)](https://www.npmjs.com/package/babel-plugin-version)
[![npm](https://img.shields.io/npm/dm/babel-plugin-version.svg)](https://www.npmjs.com/package/babel-plugin-version)


## Install


> npm i --save-dev babel-plugin-version



## Usage


Add it into `.babelrc`.

```json
{
  "plugins": [
    "version"
  ]
}
```



## Result


 - Input

```js
const a = { a: __VERSION__ };

const b = a === __VERSION__;

const c = [__VERSION__];

const d =__VERSION__ = 1;

const e = "__VERSION__";
```

 - Output

```js
const a = { a: "0.1.0" };

const b = a === "0.1.0";

const c = ["0.1.0"];

const d = __VERSION__ = 1;

const e = "0.1.0";
```



## Configure


You can customize the default `__VERSION__` define.

```json
{
  "plugins": [
    ["version", {
      "define": "__PKG_VERSION__",
      "identifier": false,
      "stringLiteral": true 
     }]
  ]
}
```

 - **define**, `string`. Default `__VERSION__`. Define the keyword string which will be transformed.
 - **identifier**, `boolean`. Default `true`. Whether transform identifier which's name is equal `define` string.
 - **stringLiteral**, `boolean`. Default `true`. Whether transform string variable which is equal `define` string.



## Test


```
npm i

npm t
```

Then see the files in `lib` dir.



## License

MIT
