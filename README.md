# @fnando/codestyle

## Installation

```
$ yarn add -D @fnando/codestyle
```

## Usage

### Typescript

There are 3 distinct configuration files.

- `@fnando/codestyle`: the base file, which covers regular TypeScript, as well as React's.
- `@fnando/codestyle/react-native`: a React Native configuration that extends the base file.
- `@fnando/codestyle/package`: a React Native configuration that emits code for packages.

Create a file `tsconfig.json` with the following lines, extending from the file you care about. Don't forget to specify the source directory.

```json
{
  "extends": "@fnando/codestyle",
  "include": ["src"]
}
```

### Prettier

Create a file `.prettierrc.js` with the following lines:

```json
module.exports = require("@fnando/codestyle/prettier.json");
```

### ESLint

[Follow instructions](https://github.com/fnando/eslint-config-codestyle).

### Jest

Create a file `jest.config.js` with the following lines:

```json
module.exports = require("@fnando/codestyle/react/jest");
```

You can also use `"@fnando/codestyle/typescript/jest"` for Jest configuration without React.

## License

Copyright (c) 2019 Nando Vieira

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
