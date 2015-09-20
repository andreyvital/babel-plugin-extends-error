## `babel-plugin-extends-error`

The problem: `extends Error`. The stack trace isn't available when your code is transpiled with babel.

For example:
```JS
class UserNotFound extends Error {
}

try {
  throw new UserNotFound()
} catch (e) {
  console.log(e.name)
  console.log(e.stack)
}
```

**node 4.0.0**
```
Error
Error
  at ...
  at ...
  at ...
```

**5.8.23 (babel-core 5.8.24)**
```
Error
undefined
```

With `babel-extends-error-plugin` enabled:
```
UserNotFound
UserNotFound
  at ...
  at ...
```

Requirement: [es6-error](https://github.com/bjyoungblood/es6-error) installed on your side. Just `npm install es6-error --save` and you're good to go. This plugin simply detects if you're extending from `Error` and converts it to `ExtendableError`.
