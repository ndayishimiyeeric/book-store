import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, id, handleClick } = props;
  return (
    <button
      id={id}
      type="button"
      onClick={() => handleClick(id)}
    >
      {name}
    </button>
  );
}

export default Button;

Button.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: 'Button',
};
