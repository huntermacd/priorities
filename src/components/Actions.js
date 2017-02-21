import React, { PropTypes } from 'react';

const Actions = props =>
  <div className="Actions">
    <span
      className="ActionsEdit"
      title="Edit"
      onClick={ props.onAction.bind(null, 'edit') }>EDIT</span>
    <span
      className="ActionsRemove"
      title="Remove"
      onClick={ props.onAction.bind(null, 'remove') }>REMOVE</span>
  </div>

Actions.propTypes = {
  onAction: PropTypes.func,
};

Actions.defaultProps = {
  onAction: () => {},
};

export default Actions
