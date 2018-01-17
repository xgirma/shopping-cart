# setup

```json
{
  "name": "shopping-cart",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.2",
    "jest": "^22.1.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "1.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/babel-jest",
    "collectCoverage": true
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-jest": "^22.1.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "eslint": "^4.15.0",
    "jest-cli": "^22.1.1",
    "nodemon": "^1.14.11"
  }
}
```
    npm run test
    
Throws the following error.

<img width="1620" alt="screen shot 2018-01-17 at 12 15 59 am" src="https://user-images.githubusercontent.com/5876481/35032425-b1b5783e-fb1b-11e7-8307-6aea4a345197.png">

    ./node_modules/.bin/jest
    
<img width="1621" alt="screen shot 2018-01-17 at 12 18 39 am" src="https://user-images.githubusercontent.com/5876481/35032523-0787feee-fb1c-11e7-9d3d-4c7075afc1fb.png">
    

```diff
{
  "name": "shopping-cart",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.2",
    "jest": "^22.1.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "1.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "jest": {
-    "scriptPreprocessor": "<rootDir>/node_modules/babel-jest", 
+    "transform": {".*": "<rootDir>/node_modules/babel-jest"},
    "collectCoverage": true
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-jest": "^22.1.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "eslint": "^4.15.0",
    "jest-cli": "^22.1.1",
    "nodemon": "^1.14.11"
  }
}
``` 
    ./node_modules/.bin/jest
    
<img width="1624" alt="screen shot 2018-01-17 at 12 22 30 am" src="https://user-images.githubusercontent.com/5876481/35032682-900f3d54-fb1c-11e7-820a-1994cde26372.png">   

Reason `JSX` transform does not work. Add the `babel-plugin-transform-react-jsx` plugin and create `.babelrc`.

    npm i -D babel-plugin-transform-react-jsx

```json
{
  "plugins": ["transform-react-jsx"]
}
```

<img width="1625" alt="screen shot 2018-01-17 at 12 33 32 am" src="https://user-images.githubusercontent.com/5876481/35033064-25031ae2-fb1e-11e7-8358-61035d2aa593.png">

```diff
{
  "name": "shopping-cart",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.2",
    "jest": "^22.1.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "1.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "jest": {
    "transform": {
-      ".*": "<rootDir>/node_modules/babel-jest",
+      "^.+\\.jsx?$": "babel-jest"
    },
    "collectCoverage": true,
    "verbose": true
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-jest": "^22.1.0",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",
    "babel-plugin-transform-react-jsx": "^6.24.1",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "eslint": "^4.15.0",
    "jest-cli": "^22.1.1",
    "nodemon": "^1.14.11"
  }
}
```

```json
{
  "plugins": [
    "transform-es2015-modules-commonjs",
    "transform-react-jsx"
  ],
  "presets": [
    "es2015",
    "react",
    "stage-0"
  ]
}
```

<img width="1623" alt="screen shot 2018-01-17 at 1 07 39 am" src="https://user-images.githubusercontent.com/5876481/35034401-e3a908cc-fb22-11e7-962f-3a62541f0564.png">

    npm i -D babel-plugin-transform-postcss
    
```json
{
  "plugins": [
    "transform-es2015-modules-commonjs",
    "transform-react-jsx",
    "babel-plugin-transform-postcss"
  ],
  "presets": [
    "es2015",
    "react",
    "stage-0"
  ]
}
```

<img width="1625" alt="screen shot 2018-01-17 at 1 10 58 am" src="https://user-images.githubusercontent.com/5876481/35034530-598006f4-fb23-11e7-8ee6-421fccc66814.png">

    npm i -D postcss
    
<img width="1622" alt="screen shot 2018-01-17 at 1 15 23 am" src="https://user-images.githubusercontent.com/5876481/35034726-f84bf040-fb23-11e7-85a2-936390f294aa.png">