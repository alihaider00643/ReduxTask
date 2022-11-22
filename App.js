import {View, Text} from 'react-native';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';
import configureStore from './src/store';
import Counter from './src/Screens/Counter';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
