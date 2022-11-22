import {createStore, combineReducers} from 'redux';
// import pageReducer from '../reducers/pageReducer';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import pageListReducer from './Reducers/PageList';
const rootReducer = combineReducers({pageList: pageListReducer});
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
