import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getInitialState from "./initial-state";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App items={getInitialState()} locale={{country: "US"}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
