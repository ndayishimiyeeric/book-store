import { createSlice } from '@reduxjs/toolkit';

// INITIAL STATE
const initialState = {
  status: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    displayMessage: (state) => {
      state.status = 'Under constructions'; //eslint-disable-line
    },
  },
});

export const { displayMessage } = categorySlice.actions;

export default categorySlice.reducer;
