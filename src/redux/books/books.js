import { createSlice } from '@reduxjs/toolkit';

// INITIAL STATE
const initialState = {
  books: [
    {
      id: 1,
      title: 'Lean Redux',
      author: 'Microverse',
    },
    {
      id: 2,
      title: 'Lean Advanced Redux',
      author: 'FreeCodeCamp',
    },
    {
      id: 3,
      title: 'Learn ReduxToolkit',
      author: 'Code Cademy',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [ //eslint-disable-line
        ...state.books,
        payload,
      ];
    },
    removeBook: (state, { payload }) => {
      state.books = state.books.filter((item) => item.id !== payload.id); //eslint-disable-line
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
