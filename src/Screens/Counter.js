import {StyleSheet, View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';
import {TodoApp} from './TodoList';

const Counter = () => {
  return <TodoApp />;
};

export default Counter;
