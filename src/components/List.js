import React, { Component, PropTypes } from 'react';
import Priority from './Priority';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      priorities: this.props.priorities,
    };
  }

  render() {
    let { priorities } = this.state;
    return (
      <div className="List">
        {
          priorities.map((p, i) => {
            let { description, value } = p;
            return <Priority
                      key={ i }
                      description={ description }
                      value={ value } />
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
