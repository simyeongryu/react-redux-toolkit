import { createStore } from 'redux';
import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

// const action = create(type)
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// createReducer(초기 state)
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },

  [deleteToDo]: (state, action) => {
    return state.filter(toDo => toDo.id !== action.payload);
  }
});

// const store = createStore(reducer);

// middleware를 사용하면서 store를 생성한다.
// 일례로 Redux Dev Tools를 사용할 수 있다.
const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;
