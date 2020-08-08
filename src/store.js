import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

/** *
// 일반 리덕스
const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = text => {
  return {
    type: ADD,
    text
  };
};

const deleteToDo = id => {
  return {
    type: DELETE,
    id
  };
};

/*/
// 리덕스 툴킷
// const action = create(type)
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');
/**/

/**
// 일반 리덕스
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};
/*/
// 리덕스 툴킷
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
/**/
const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;
