# @react-nevka/eslint

Shareable ESLint configuration for ```@react-nevka``` libraries

## Installation

1. Install this package as devDependency

```sh
# with Yarn
$ yarn add -D @react-nevka/eslint-config

# with npm
$ npm i -D @react-nevka/eslint-config

# with pnpm
$ pnpm add -D @react-nevka/eslint-config
```

2. Create ESLint configuration file in your project

Create a `.eslintrc.js` file in project root with the following content:

```js
module.exports = {
  root: true,	
  extends: ["@react-nevka/eslint-config"],
};
```