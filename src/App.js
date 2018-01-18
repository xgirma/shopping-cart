import React, {Component} from 'react';
import './App.css';
import LocalizationBox from './components/LocalizationBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocalizationBox {...this.props}/>
      </div>
    );
  }
}

export default App;
