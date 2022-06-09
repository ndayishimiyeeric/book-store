import React from 'react';
import { useSelector } from 'react-redux';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import Book from './Book';
import Form from './Form';
import styles from './style/Books.module.css';

function Books() {
  const { books, isLoading } = useSelector((state) => state.book);
  const booksElement = books.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      author={book.author}
      category={book.category}
    />
  ));

  if (isLoading) {
    return (
      <div className={styles.books}>
        <h4 className={styles.loading}>Loading....</h4>
        <hr className={styles.hr} />
        <Form />
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className={styles.books}>
        <h4
          className={styles.loading}
        >
          No Book Available
          <BsEmojiSmileUpsideDown />
        </h4>
        <hr className={styles.hr} />
        <Form />
      </div>
    );
  }

  return (
    <div className={styles.books}>
      {booksElement}
      <hr className={styles.hr} />
      <Form />
    </div>
  );
}

export default Books;
