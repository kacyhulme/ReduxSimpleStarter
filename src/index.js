import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDF_-Y9IzY0nzwOG-mRfturukN4-IBlf9M';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <App />
  </Provider>
  , document.querySelector('.container'));
