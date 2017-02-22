import actions from '../flux/actions';
import FormActions from './FormActions';
import React, { Component, PropTypes } from 'react';
import store from '../flux/store';

store.init();

class Priority extends Component {
  _increment() {
    actions.increment(this.props.id);
  }

  _dispatch(action) {
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
    // let { id } = this.props;
    // TODO: wire-up edit functionality
  }

  _remove(item) {
    let { id } = this.props;
    let updatedPs = store.getPriorities().filter(p => {
      return p.id !== id;
    });
    store.setPriorities(updatedPs, true);
  }

  render() {
    let { description, value } = this.props;
    return (
      <div className="Priority">
        <div onClick={ this._increment.bind(this) }>
          <p>{ description } <span>{ value }</span></p>
        </div>
        <FormActions onAction={ this._dispatch.bind(this) } />
      </div>
    );
  }
}

Priority.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.number,
  id: PropTypes.string,
};

export default Priority
