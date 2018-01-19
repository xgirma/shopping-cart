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

> babel-plugin-transform-postcss: Error: Loading PostCSS Plugin failed: Cannot find module 'postcss-import'

<img width="1632" alt="screen shot 2018-01-19 at 12 44 47 am" src="https://user-images.githubusercontent.com/5876481/35142072-0301502c-fcb2-11e7-8241-6ae01be8333a.png">

[Solution](https://github.com/postcss/postcss-loader/issues/311)

    npm i -S postcss-loader postcss-import postcss-cssnext cssnano sugarss autoprefixer

Initial coverage with no test, surprising 

<img width="1624" alt="screen shot 2018-01-19 at 12 29 16 am" src="https://user-images.githubusercontent.com/5876481/35141461-d42bdbf2-fcaf-11e7-8016-bd88d2f0f6cb.png">

Issue [3] TypeError: Cannot read property 'length' of undefined

    npm run test

<img width="1626" alt="screen shot 2018-01-19 at 12 30 43 am" src="https://user-images.githubusercontent.com/5876481/35141527-0d5ffe30-fcb0-11e7-9cb0-eccb7d66eacc.png">

<img width="1626" alt="screen shot 2018-01-19 at 12 33 51 am" src="https://user-images.githubusercontent.com/5876481/35141655-79c52f46-fcb0-11e7-857f-122ed7449641.png">

Consider adding an error boundary to your tree to customize error handling behavior.
    Visit [https://fb.me/react-error-boundaries](https://fb.me/react-error-boundaries) to learn more about error boundaries.
    
```diff
import React, {Component} from 'react';
import './App.css';
import LocalizationBox from './components/LocalizationBox';
+ import ErrorBoundary from './components/ErrorBoundry';

class App extends Component {
  render() {
    return (
      <div className="App">
+        <ErrorBoundary>
          <LocalizationBox {...this.props}/>
+        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
```
ErrorBoundary component.
```javascript
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default  ErrorBoundary;
```
    
<img width="1622" alt="screen shot 2018-01-19 at 12 51 08 am" src="https://user-images.githubusercontent.com/5876481/35142346-e0a687f8-fcb2-11e7-85a5-27c6080ae81e.png">

[github issue](https://github.com/facebookincubator/create-react-app/issues/3627) Make it clearer in error overlay when error boundary has caught an error

<img width="786" alt="screen shot 2018-01-19 at 12 54 58 am" src="https://user-images.githubusercontent.com/5876481/35142524-6b7db694-fcb3-11e7-9fd4-8adf116f0450.png">

Component before

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import getInitialState from './initial-state'

ReactDOM.render(<App items={getInitialState()} locale={{country: "US"}}/>,
  document.getElementById('root'));
``` 

Test before
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
```

Test After: 
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getInitialState from "./initial-state";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App items={getInitialState()} locale={{country: "US"}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
```

<img width="1624" alt="screen shot 2018-01-19 at 1 12 57 am" src="https://user-images.githubusercontent.com/5876481/35143274-f58e8e92-fcb5-11e7-8270-470a7fe935a5.png">
