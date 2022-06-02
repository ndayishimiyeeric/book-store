import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Book(props) {
  const { title } = props;
  return (
    <div>
      <h3>{title}</h3>
      <Button name="Remove" />
    </div>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string,
};

Book.defaultProps = {
  title: 'Book tile',
};
