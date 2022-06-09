import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayMessage } from '../redux/categories/categories';
import styles from './style/Categories.module.css';

function Categories() {
  const { status } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(displayMessage());
  };
  return (
    <div className={styles.categories}>
      <button
        type="button"
        onClick={handleStatus}
        className={styles.button}
      >
        CHECK STATUS
      </button>
      <h1 className={styles.message}>{ status }</h1>
    </div>
  );
}

export default Categories;
