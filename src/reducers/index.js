import { combineReducers } from 'redux';
import loading from './loading';
import user from './user';
import team from './team';
import forum from './forum';

export default combineReducers({
  loading,
  user,
  team,
  forum,
});
