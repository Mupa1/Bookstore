import { combineReducers } from 'redux';

import booksReducer from './books';
import booksFilter from './filter';

const rootReducer = combineReducers({
  books: booksReducer,
  filter: booksFilter,
});

export default rootReducer;
