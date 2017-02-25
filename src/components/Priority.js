import actions from '../flux/actions';
import classNames from 'classnames';
import FormActions from './FormActions';
import './Priority.css';
import React, { Component, PropTypes } from 'react';
import store from '../flux/store';

store.init();

class Priority extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: this.props.editing,
      animating: this.props.animating,
    };
  }

  _increment() {
    actions.increment(this.props.id);
    this.setState({
      animating: true,
    });
    setTimeout(() => {
      this.setState({ animating: false });
    }, 1000);
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
            : <div className="Priority-content">
                <div onClick={ this._increment.bind(this) }>
                  <p>{ description }</p>
                </div>
                <div className="Priority-value">
                  <p>{ value }</p>
                </div>
                <div className={ classNames({ "Priority-plus": true, "animating": this.state.animating }) }>
                  <p>+1</p>
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
  animating: PropTypes.bool,
};

Priority.defaultProps = {
  editing: false,
  animating: false,
};

export default Priority
