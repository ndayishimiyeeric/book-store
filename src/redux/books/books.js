// ACTIONS
const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';

// INITIAL STATE
const initialState = [];

// ACTION CREATORS
export function addAction(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function removeAction(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}

// REDUCER
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}
