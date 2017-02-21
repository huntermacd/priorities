import React, { Component } from 'react';
import './App.css';
import List from './components/List';

const samplePriorities = [
  {
    description: "Re-write Priorities app",
    value: 11
  },
  {
    description: "Record new record",
    value: 20
  },
  {
    description: "Learn the meaning of life",
    value: 42
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Priorities</h2>
        </div>
        <div className="App-intro">
          <List priorities={ samplePriorities } />
        </div>
      </div>
    );
  }
}

export default App;
