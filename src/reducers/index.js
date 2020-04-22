import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import render from './render';

const renderPersistConfig = {
  key: 'render',
  storage: storage,
};


export default combineReducers({
  render: persistReducer(renderPersistConfig, render),
})
