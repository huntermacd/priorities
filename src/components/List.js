import React, { Component, PropTypes } from 'react';
import Priority from './Priority';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      priorities: this.props.priorities,
    };
  }

  _save(e) {
    e.preventDefault();
    const inputVal = this.refs.form.value;
    let priorities = this.state.priorities;
    priorities.push({
      description: inputVal,
      value: 0,
      id: Math.random().toString(16).substring(2),
    });
    this.refs.form.value = '';
    this.setState({
      priorities: priorities,
    });
    localStorage.setItem('priorities', JSON.stringify(priorities));
  }

  render() {
    let { priorities } = this.state;
    return (
      <div className="List">
        <div className="Priority">
          <form onSubmit={ this._save.bind(this) }>
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
