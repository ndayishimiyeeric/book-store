import React from 'react';
import { useSelector } from 'react-redux';
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
      <div>
        <h4>Loading....</h4>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div>
        <h4>No Book Available</h4>
        <Form />
      </div>
    );
  }

  return (
    <div className={styles.books}>
      {booksElement}
      <hr />
      <Form />
    </div>
  );
}

export default Books;
