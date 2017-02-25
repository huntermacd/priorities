import './App.css';
import List from './components/List';
import 'normalize.css';
import React, { Component, PropTypes } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showHelp: this.props.showHelp,
    };
  }

  _toggleHelp(e) {
    let showHelp = !this.state.showHelp;
    this.setState({
      showHelp: showHelp,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Priorities</h2>
          <p className="App-help-toggle" onClick={ this._toggleHelp.bind(this) }>?</p>
          {
            this.state.showHelp
              ? <p className="App-help-message">
                  {`Priorities is an app for figuring out what long-term goals of
                  yours are most important. Add a priority and whenever you're
                  reminded of it, give it a tap to increase its value. When
                  you've got time and energy to make progress but aren't sure
                  which goal to tackle, check your list of priorities!`}
                </p>
              : null
          }
        </div>
        <List />
        <footer>&copy; { new Date().getFullYear() } Hunter MacDermut</footer>
      </div>
    );
  }
}

App.propTypes = {
  showHelp: PropTypes.bool,
};

App.defaultProps = {
  showHelp: false,
};

export default App
