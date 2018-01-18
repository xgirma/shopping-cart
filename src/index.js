import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import getInitialState from './initial-state'

ReactDOM.render(<App items={getInitialState()} locale={{country: "US"}}/>,
  document.getElementById('root'));
