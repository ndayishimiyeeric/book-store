import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function Books() {
  const books = useSelector((state) => state.bookReducer);
  const booksElement = books.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      author={book.author}
    />
  ));

  return (
    <div>
      {books.length !== 0 && booksElement}
      {books.length === 0 && 'No Books Available'}
      <Form />
    </div>
  );
}

export default Books;
