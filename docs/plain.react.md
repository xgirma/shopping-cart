# Plain React

Issue [1] removing all items from the cart cause the below error. 

<img width="1035" alt="screen shot 2018-01-19 at 12 04 00 am" src="https://user-images.githubusercontent.com/5876481/35140496-54943464-fcac-11e7-9179-5d78ea3815c1.png">

before
```javascript
const sum = ([...args]) => {
  return args.reduce((a, c) => a + c);
};

export default sum;
```

after
```diff
const sum = ([...args]) => {
-  return args.reduce((a, c) => a + c);
+  return args.reduce((a, c) => { return a + c }, 0);
};

export default sum;
```

    Syntax: arr.reduce(callback[, initialValue])
    
**initialValue** [Optional]

Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. _Calling reduce() on an empty array without an initial value is an error_.

<img width="285" alt="screen shot 2018-01-19 at 12 16 29 am" src="https://user-images.githubusercontent.com/5876481/35140969-09ae9e88-fcae-11e7-95b8-d580eae7cea6.png">

Issue [2] babel-plugin-transform-postcss: Error: No PostCSS Config found in: /Users/no12579/WebstormProjects/shopping-cart/src

<img width="1623" alt="screen shot 2018-01-19 at 12 24 28 am" src="https://user-images.githubusercontent.com/5876481/35141234-3292aa1e-fcaf-11e7-9361-436c8d54aade.png">

fixed: adding 

```javascript
module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {}
  }
}
```
Source: [PostCSS Loader](https://github.com/postcss/postcss-loader)



