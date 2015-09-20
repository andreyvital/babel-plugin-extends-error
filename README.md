## `babel-plugin-extends-error`

The problem: `extends Error`. The stack trace isn't available when your code is transpiled with babel.

### Installation
```
npm install babel-plugin-extends-error --save
```

It requires [es6-error](https://github.com/bjyoungblood/es6-error) installed on your side. Just `npm install es6-error --save` and you're good to go. This plugin simply detects if you're extending from `Error` and converts it to `ExtendableError`.
