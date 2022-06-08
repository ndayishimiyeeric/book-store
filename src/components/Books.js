import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function Books() {
  const { books } = useSelector((state) => state.book);
  const booksElement = books.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      author={book.author}
    />
  ));

  if (books.length === 0) {
    return (
      <div>
        <h4>No Books Available</h4>
        <Form />
      </div>
    );
  }

  return (
    <div>
      {booksElement}
      <Form />
    </div>
  );
}

export default Books;
