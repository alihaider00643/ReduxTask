import {View, Text} from 'react-native';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';
import configureStore from './src/store';
import TodoList from './src/Screens/TodoList';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
