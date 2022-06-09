import React from 'react';
import PropTypes from 'prop-types';
import styles from './style/book.module.css';

function Button(props) {
  const {
    name, id, handleClick,
  } = props;
  return (
    <button
      className={styles.btn}
      id={id}
      type="button"
      onClick={() => handleClick({ id })}
    >
      {name}
    </button>
  );
}

export default Button;

Button.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: 'Button',
};
