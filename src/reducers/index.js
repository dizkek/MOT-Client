import { combineReducers } from 'redux';
import render from './render';
import user from './user';
import team from './team';

export default combineReducers({
  render,
  user,
  team,
});
