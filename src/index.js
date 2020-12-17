import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import booksReducer from './reducers/books';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 10),
      title: 'Horsemen\'s War',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 10),
      title: 'Becoming',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 10),
      title: 'A Primised Land',
      category: 'History',
    },
  ],
};

const store = createStore(booksReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
