import { createStore } from 'redux';
import {
  createAction,
  createReducer,
  configureStore,
  createSlice
} from '@reduxjs/toolkit';

// // const action = create(type)
// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');

// // createReducer(초기 state)
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },

//   [deleteToDo]: (state, action) => {
//     return state.filter(toDo => toDo.id !== action.payload);
//   }
// });

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) => {
      return state.filter(toDo => toDo.id !== action.payload);
    }
  }
});

// reducer에 toDos의 reducers 할당
const store = configureStore({ reducer: toDos.reducers });
console.log(toDos.actions);

// export const actionCreators = {
//   addToDo,
//   deleteToDo
// };

export const { addToDo, deleteToDo } = toDos.actions;

export default store;
