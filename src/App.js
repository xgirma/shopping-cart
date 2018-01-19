import React, {Component} from 'react';
import './App.css';
import LocalizationBox from './components/LocalizationBox';
import ErrorBoundary from './components/ErrorBoundry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <LocalizationBox {...this.props}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
