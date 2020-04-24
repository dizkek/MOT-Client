import { combineReducers } from 'redux';
import render from './render';
import user from './user';

export default combineReducers({
  render,
  user,
});
