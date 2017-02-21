import React, { Component, PropTypes } from 'react';
import Actions from './Actions';

class Priority extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: this.props.description,
      value: this.props.value,
    };
  }

  _increment() {
    let newVal = this.state.value + 1;
    this.setState({ value: newVal });
  }

  _dispatch(action) {
    console.log(this, action);
    switch (action) {
      case 'edit':
        return this._edit(this);
      case 'remove':
        return this._remove(this);
      default:
        throw Error(`Unexpected action: ${action}!`);
    }
  }

  _edit(item) {
    console.log('Editing ' + Object.keys(item));
  }

  _remove(item) {
    console.log('Removing ' + item);
  }

  render() {
    let { description, value } = this.state;
    return (
      <div>
        <div onClick={ this._increment.bind(this) }>
          <p>{ description } <span>{ value }</span></p>
        </div>
        <Actions onAction={ this._dispatch.bind(this) } />
      </div>
    );
  }
}

Priority.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.number,
};

Priority.defaultProps = {
  value: 0,
}

export default Priority
