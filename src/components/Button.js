import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return (
    <button type="button">{name}</button>
  );
}

export default Button;

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: 'Button',
};
