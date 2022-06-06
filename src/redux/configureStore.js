import { createStore, combineReducers } from 'react-redux';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = createStore(rootReducer);

export default store;
