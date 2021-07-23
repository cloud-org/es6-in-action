### module

模块化

- es6 之前, CommonJS 和 AMD
- es6 之后, import export, 静态加载
- export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错
- export 和 export default 的用法

### problem

1、SyntaxError: Cannot use import statement outside a module

```js
npm install esm
node -r esm main.js
```

link: https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js