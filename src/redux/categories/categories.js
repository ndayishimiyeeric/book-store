// ACTIONS
const MSG = 'categories_under_construction';

// INITIAL STATE
const initialState = [];

// ACTION CREATORS
export function updateAction() {
  return {
    type: MSG,
  };
}

// REDUCER
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case MSG:
      return 'under construction';
    default:
      return state;
  }
}
