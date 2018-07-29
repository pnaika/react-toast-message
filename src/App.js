import React, { Component } from 'react';
import './App.css';
import './ReactToaster/ReactToaster.js';
import ReactToasterMessage  from './ReactToaster/ReactToaster.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactToasterMessage showToaster={true}/>
      </div>
    );
  }
}

export default App;
