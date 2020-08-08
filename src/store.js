import { configureStore, createSlice } from '@reduxjs/toolkit';

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

const store = configureStore({ reducer: toDos.reducer });
console.log(toDos.actions);

export const { addToDo, deleteToDo } = toDos.actions;

export default store;
