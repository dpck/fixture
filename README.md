# @depack/fixture

[![npm version](https://badge.fury.io/js/%40depack%2Ffixture.svg)](https://npmjs.org/package/@depack/fixture)

`@depack/fixture` is The Fixture For Testing Static Analysis.

```sh
yarn add -E @depack/fixture
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [The Structure](#the-structure)
- [`index.jsx`](#indexjsx)
- [Static Analysis](#static-analysis)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default and named functions:

```js
import fixture, { Component3 } from '@depack/fixture'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## The Structure

```m
src
├── Component.jsx
├── Test.jsx
├── Test2.jsx
└── index.jsx
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `index.jsx`

```javascript
import { render } from 'preact'
import { Test } from '@idio/preact-fixture'
import Component from './Component'

const Fixture = () => {
  return (<Component>
    <Test />
  </Component>)
}

export default Fixture

export { Component3 } from './Test2'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## Static Analysis

```js
[ { entry: 'node_modules/preact/dist/preact.mjs',
    packageJson: 'node_modules/preact/package.json',
    version: '8.4.2',
    name: 'preact',
    from: 
     [ 'src/index.jsx',
       'node_modules/@idio/preact-fixture/src/index.js' ] },
  { entry: 'node_modules/@idio/preact-fixture/src/index.js',
    packageJson: 'node_modules/@idio/preact-fixture/package.json',
    version: '1.0.0',
    name: '@idio/preact-fixture',
    from: [ 'src/index.jsx' ] },
  { entry: 'src/Component.jsx', from: [ 'src/index.jsx' ] },
  { entry: 'src/Test2.jsx', from: [ 'src/index.jsx' ] },
  { entry: 'node_modules/@idio/preact-fixture/src/Test.jsx',
    from: [ 'node_modules/@idio/preact-fixture/src/index.js' ] },
  { entry: 'src/Test.jsx', from: [ 'src/Component.jsx' ] } ]
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>
      © <a href="https://artd.eco">Art Deco</a> for <a href="https://artd.eco/depack">Depack</a>
      2019
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif" alt="Tech Nation Visa" />
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks">Tech Nation Visa Sucks</a>
    </th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>