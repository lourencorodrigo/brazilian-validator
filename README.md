# validator-brazil

Este módulo permite a validação de CPF e CNPJ. Documentos unicamente brasileiros.

[![npm version](https://badge.fury.io/js/validator-brazil.svg)](https://badge.fury.io/js/validator-brazil)

## Getting started

#### Install with NPM

```
$ npm install validator-brazil --save
```

#### Install with Yarn

```
$ yarn add validator-brazil
```

#### How to use with ES6

#### CPF

```js
import { isCpf } from "validator-brazil";

// No points or hyphens
console.log(isCpf("29018170097")); // false
console.log(isCpf("12312345600")); // false

// With points or hyphens
console.log(isCpf("123.123.456-00")); // false
```

#### CNPJ

```js
import { isCnpj, isCpf, isCep } from "validator-brazil";

// No points or hyphens
console.log(isCnpj("54334068000136")); // true
console.log(isCnpj("00111222000100")); // false

// With points or hyphens
console.log(isCnpj("54.334.068/0001-36")); // true
```

#### CEP

```js
import { isCep } from "validator-brazil";

// No points or hyphens
console.log(isCep("43710130")); // true
console.log(isCep("5471013423")); // false

// With points or hyphens
console.log(isCep("43710-130")); // true
```

#### How to use with ES5

```js
const validator = require("validator-brazil");

// No points or hyphens
console.log(validator.isCnpj("54334068000136")); // true
console.log(validator.isCnpj("00111222000100")); // false
console.log(validator.isCpf("29018170097")); // true
console.log(validator.isCpf("12312345600")); // false

// With points or hyphens
console.log(validator.isCnpj("54.334.068/0001-36")); // true
console.log(validator.isCpf("123.123.456-00")); // false
```
