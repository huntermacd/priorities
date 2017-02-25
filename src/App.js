import './App.css';
import List from './components/List';
import 'normalize.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Priorities</h2>
        </div>
        <List />
      </div>
    );
  }
}

export default App;
