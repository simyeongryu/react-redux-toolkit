import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import toDos from './reducers/toDos';

const reducer = combineReducers({
  toDos
});

const store = configureStore({ reducer });

export default store;
