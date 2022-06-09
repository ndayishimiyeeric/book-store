import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Button from './Button';
import styles from './style/book.module.css';

function Book(props) {
  const {
    title, author, id, category,
  } = props;

  const dispatch = useDispatch();

  const handleClick = ({ id }) => {
    dispatch(removeBook({ id }));
  };
  return (
    <div className={styles.book}>
      <p>{title}</p>
      <p>{ author }</p>
      <p>{ category }</p>
      <Button id={id} name="Remove" handleClick={handleClick} />
    </div>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Book.defaultProps = {
  title: 'Book Title',
  author: 'Book Author',
  category: 'Book Category',
};
