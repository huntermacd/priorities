import actions from '../flux/actions';
import Priority from './Priority';
import React, { Component, PropTypes } from 'react';
import store from '../flux/store';

store.init();

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      priorities: store.getPriorities(),
    };

    store.addListener('change', () => {
      this.setState({
        priorities: store.getPriorities(),
      })
    });
  }

  _addNew(e) {
    e.preventDefault();
    const inputVal = this.refs.form.value;
    let newP = {
      description: inputVal,
      value: 0,
      id: Math.random().toString(16).substring(2),
    };
    this.refs.form.value = '';
    actions.create(newP);
  }

  render() {
    let { priorities } = this.state;
    return (
      <div className="List">
        <div className="Priority">
          <form onSubmit={ this._addNew.bind(this) }>
            <input type="text" ref="form" placeholder="Describe new priority..." />
            <input type="submit" value="Add" />
          </form>
        </div>
        {
          priorities.map((p, i) => {
            let { description, value, id } = p;
            return <Priority
                      key={ i }
                      description={ description }
                      value={ value }
                      id={ id } />
          })
        }
      </div>
    );
  }
}

List.propTypes = {
  priorities: PropTypes.arrayOf(
    PropTypes.object
  ),
};

export default List
