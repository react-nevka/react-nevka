# @react-nevka/eslint

Shareable ESLint configuration for ```@react-nevka``` libraries

## Installation

1. Install this package as devDependency

```sh
# with Yarn
$ yarn add -D @react-nevka/eslint

# with npm
$ npm i -D @react-nevka/eslint

# with pnpm
$ pnpm add -D @react-nevka/eslint
```

2. Use ESLint config in your project

Create a `.eslintrc.js` file in project root with the following content:

```js
module.exports = {
  extends: ["@react-nevka/eslint"],
};
```