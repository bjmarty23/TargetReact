import { combineReducers } from 'redux';
import getReducer from './getReducer';

//combines all the reducers as one package
const store = combineReducers({
 
  getReducer,

});

export default store;
