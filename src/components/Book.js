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
      <div className={styles.details}>
        <p className={styles.detailsCategory}>{ category }</p>
        <p className={styles.detailsTitle}>{title}</p>
        <p className={styles.detailsAuthor}>{author}</p>
        <div className={styles.detailsButtons}>
          <Button id={id} name="Comments" />
          <div className={styles.smline}>{ }</div>
          <Button id={id} name="Remove" handleClick={handleClick} />
          <div className={styles.smline}>{ }</div>
          <Button id={id} name="Edit" />
        </div>
      </div>
      <div className={styles.progress}>
        <div className={styles.progressCircle}>
          <svg>
            <circle cx="40" cy="40" r="40">{ }</circle>
            <circle cx="40" cy="40" r="40">{ }</circle>
          </svg>
        </div>
        <div className={styles.progressParcent}>
          <p className={styles.progressNumber}>65%</p>
          <p className={styles.progressCompleted}>Completed</p>
        </div>
      </div>
      <div className={styles.lgline}>{ }</div>
      <div className={styles.chapters}>
        <p className={styles.chaptersTitle}>CURRENT CHAPTER</p>
        <p className={styles.chaptersChap}>Chapter 2</p>
        <button className={styles.button} type="button">UPDATE PROGRESS</button>
      </div>
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
