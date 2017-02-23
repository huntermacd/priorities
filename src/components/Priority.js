import actions from '../flux/actions';
import FormActions from './FormActions';
import React, { Component, PropTypes } from 'react';
import store from '../flux/store';

store.init();

class Priority extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: this.props.editing,
    };
  }
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

  _save(e) {
    e.preventDefault();
    let newDesc = this.refs.editForm.value;
    this.setState({
      editing: false,
    });
    actions.update(this.props.id, newDesc);
  }

  _edit(item) {
    this.setState({
      editing: true,
    });
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
        {
          this.state.editing
            ? <form onSubmit={ this._save.bind(this) }>
                <input type="text" ref="editForm" defaultValue={ description } />
                <input type="submit" value="Edit" />
              </form>
            : <div>
                <div onClick={ this._increment.bind(this) }>
                  <p>{ description } <span>{ value }</span></p>
                </div>
                <FormActions onAction={ this._dispatch.bind(this) } />
              </div>
        }
      </div>
    );
  }
}

Priority.propTypes = {
  editing: PropTypes.bool,
};

Priority.defaultProps = {
  editing: false,
};

export default Priority
