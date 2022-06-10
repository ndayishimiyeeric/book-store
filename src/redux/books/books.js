import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8zgJXl3G9vojkee6XZ5H/books';

// INITIAL STATE
const initialState = {
  books: [],
  isLoading: false,
};

export const getBooks = createAsyncThunk('books/getbooks', async () => {
  const response = await fetch(url);
  const data = await response.json();
  const books = [Object.keys(data).map((key) => (
    {
      id: key,
      ...data[key][0],
    }
  ))];
  return books;
});

export const addBook = createAsyncThunk(
  'books/addBook', async (payload, thunkAPI) => {
    await fetch(`${url}`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: Math.floor(Math.random() * 1000),
        title: payload.title,
        author: payload.author,
        category: payload.category,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => thunkAPI.dispatch(getBooks()));
    const { books } = thunkAPI.getState().books;
    return books;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook', async (payload, thunkAPI) => {
    await fetch(`${url}/${payload.id}`, {
      method: 'DELETE',
    }).then(() => thunkAPI.dispatch(getBooks()));
    const { books } = thunkAPI.getState().books;
    return books;
  },
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state) => {
      const newState = state;
      newState.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      const newState = state;
      newState.isLoading = false;
      const newStore = action.payload[0];
      newState.books = newStore;
    },
    [getBooks.rejected]: (state) => {
      const newState = state;
      newState.isLoading = false;
    },
    [addBook.fulfilled]: (state, action) => {
      const newState = state;
      newState.books = action.payload;
    },
    [removeBook.fulfilled]: (state, action) => {
      const newState = state;
      newState.books = action.payload;
    },
  },
});

export default bookSlice.reducer;
