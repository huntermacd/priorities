import React, { PropTypes } from 'react';

const FormActions = props =>
  <div className="FormActions">
    <span
      className="FormActionsEdit"
      title="Edit"
      onClick={ props.onAction.bind(null, 'edit') }>EDIT</span>
    <span
      className="FormActionsRemove"
      title="Remove"
      onClick={ props.onAction.bind(null, 'remove') }>REMOVE</span>
  </div>

FormActions.propTypes = {
  onAction: PropTypes.func,
};

FormActions.defaultProps = {
  onAction: () => {},
};

export default FormActions
