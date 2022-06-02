import React from 'react';
import Book from './Book';
import Form from './Form';

function Books() {
  return (
    <div>
      <Book title="Book 1" />
      <Book title="Book 2" />
      <Form />
    </div>
  );
}

export default Books;
