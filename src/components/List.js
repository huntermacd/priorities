import actions from '../flux/actions';
import FlipMove from 'react-flip-move';
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
    let inputVal = this.refs.createForm.value;
    let newP = {
      description: inputVal,
      value: 0,
      id: Math.random().toString(16).substring(2),
    };
    this.refs.createForm.value = '';
    actions.create(newP);
  }

  render() {
    let { priorities } = this.state;
    priorities.sort((a, b) => {
      return a.value < b.value;
    });
    return (
      <div className="List">
        <div className="Priority">
          <form onSubmit={ this._addNew.bind(this) }>
            <input type="text" ref="createForm" placeholder="Describe new priority..." />
            <input type="submit" value="Add" />
          </form>
        </div>
        <FlipMove duration={ 250 } easing="ease-in-out" staggerDurationBy={ 100 }>
          {
            priorities.map((p, i) => {
              let { description, value, id } = p;
              return <Priority
                        key={ id }
                        description={ description }
                        value={ value }
                        id={ id } />
            })
          }
        </FlipMove>
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
