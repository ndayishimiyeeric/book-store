// ACTIONS
const MESSAGE = 'bookstore/categories/MESSAGE';

// INITIAL STATE
const initialState = [];

// ACTION CREATORS
export function updateAction() {
  return {
    type: MESSAGE,
  };
}

// REDUCER
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE:
      return 'under construction';
    default:
      return state;
  }
}
