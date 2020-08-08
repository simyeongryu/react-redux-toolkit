import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

// const action = create(type)
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// payload는 action으로 전해진 인자값
/* 
const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter(toDo => toDo.id !== action.payload);
    default:
      return state;
  }
}; 
*/

// createReducer(초기 state)
// 일반 리덕스는 새로운 state를 만들어서 덮어씌워야 하지만
const reducer = createReducer([], {
  // [action]: (state, action자신)
  // toolkit은 state를 mutate 할 수 있다. (Immer 덕분)
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  // 새로운 state를 return 할 수도 있다.
  // 단, return 하려면 그 값이 새로운 state여야 한다.
  [deleteToDo]: (state, action) => {
    return state.filter(toDo => toDo.id !== action.payload);
  }
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;
