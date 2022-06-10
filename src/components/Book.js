import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Alert } from '@mui/material';
import { removeBook } from '../redux/books/books';
import Button from './Button';
import styles from './style/book.module.css';

function Book(props) {
  const [show, setShow] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const {
    title, author, id, category,
  } = props;

  const dispatch = useDispatch();

  const handleClick = ({ id }) => {
    dispatch(removeBook({ id }));
    setSuccess(true);
  };

  const alertSuccess = (
    <div className={styles.bottom}>
      <Alert
        severity="success"
      >
        Book Deleted successfull!
      </Alert>
    </div>
  );

  const handleShow = () => {
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };

  const alert = (
    <div className={styles.top}>
      <Alert
        onClose={() => { handleHide(); }}
        severity="info"
      >
        Under Construction
      </Alert>
    </div>
  );

  return (
    <>
      {show && alert}
      {success && alertSuccess}
      <div className={styles.book}>
        <div className={styles.details}>
          <p className={styles.detailsCategory}>{ category }</p>
          <p className={styles.detailsTitle}>{title}</p>
          <p className={styles.detailsAuthor}>{author}</p>
          <div className={styles.detailsButtons}>
            <Button id={id} name="Comments" handleClick={handleShow} />
            <div className={styles.smline}>{ }</div>
            <Button id={id} name="Remove" handleClick={handleClick} />
            <div className={styles.smline}>{ }</div>
            <Button id={id} name="Edit" handleClick={handleShow} />
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
          <button
            className={styles.button}
            type="button"
            onClick={handleShow}
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </>
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
