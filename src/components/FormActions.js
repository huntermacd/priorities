import './FormActions.css';
import React, { PropTypes } from 'react';

const FormActions = props =>
  <div className="FormActions">
    <button
      className="FormActionsEdit"
      title="Edit"
      onClick={ props.onAction.bind(null, 'edit') }>&#x270E;</button>
    <button
      className="FormActionsRemove"
      title="Remove"
      onClick={ props.onAction.bind(null, 'remove') }>&#xd7;</button>
  </div>

FormActions.propTypes = {
  onAction: PropTypes.func,
};

FormActions.defaultProps = {
  onAction: () => {},
};

export default FormActions
