import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Horsemen\'s War',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Becoming',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'A Promised Land',
      category: 'History',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
