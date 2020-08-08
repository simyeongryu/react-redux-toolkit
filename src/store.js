import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

// const action = create(type)
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// payload는 action으로 전해진 인자값
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter(toDo => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;
