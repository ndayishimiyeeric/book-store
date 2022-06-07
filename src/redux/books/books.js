// ACTIONS
const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';

// INITIAL STATE
export const initialState = [
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
];

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
    payload: id,
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
      return [...state.filter((item) => (item.id !== action.payload))];
    default:
      return state;
  }
}
