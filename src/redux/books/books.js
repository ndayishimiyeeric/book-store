// ACTIONS
const ADD = 'add_book';
const REMOVE = 'remove-book';

// INITIAL STATE
const initialState = [];

// ACTION CREATORS
export function addAction(book) {
  return {
    type: ADD,
    book,
  };
}

export function removeAction(id) {
  return {
    type: REMOVE,
    id,
  };
}

// REDUCER
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.book,
      ];
    case REMOVE:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}
