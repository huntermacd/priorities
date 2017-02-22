import React, { Component } from 'react';
import './App.css';
import List from './components/List';

let priorities = JSON.parse(localStorage.getItem('priorities'));

if (!priorities) {
  priorities = [{
    description: "Remove this and start adding your own!",
    value: 0,
    id: Math.random().toString(16).substring(2),
  }];
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Priorities</h2>
        </div>
        <div className="App-intro">
          <List priorities={ priorities } />
        </div>
      </div>
    );
  }
}

export default App;
