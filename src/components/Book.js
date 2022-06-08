import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeAction } from '../redux/books/books';
import Button from './Button';
import styles from './style/book.module.css';

function Book(props) {
  const { title, author, id } = props;

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeAction(id));
  };
  return (
    <div className={styles.book}>
      <h3>{title}</h3>
      <h4>{ author }</h4>
      <Button id={id} name="Remove" handleClick={handleClick} />
    </div>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.number.isRequired,
};

Book.defaultProps = {
  title: 'Book Title',
  author: 'Book Author',
};
