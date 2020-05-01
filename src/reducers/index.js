import { combineReducers } from 'redux';
import loading from './loading';
import user from './user';
import team from './team';
import forum from './forum';
import comments from './comments';

export default combineReducers({
  loading,
  user,
  team,
  forum,
  comments,
});
