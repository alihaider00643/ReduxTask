import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from '../Actions/PageList';

export class TodoList extends Component {
  incrementCount() {
    let {actions} = this.props;
    actions.getPageList();
  }
  render() {
    const {pageList} = this.props;
    console.log(pageList);
    return (
      <View styles={styles.container}>
        <Button title="Get Employee" onPress={() => this.incrementCount()} />
        {pageList.map(employee => (
          <Text style={styles.textCenter}>{employee.employee_name}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  pageList: state.pageList.pageList,
});

const ActionCreators = Object.assign({}, pageActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
