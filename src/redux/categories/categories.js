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
      const newState = state;
      newState.status = 'Under constructions';
    },
  },
});

export const { displayMessage } = categorySlice.actions;

export default categorySlice.reducer;
