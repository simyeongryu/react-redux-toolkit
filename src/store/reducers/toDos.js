import { createSlice } from '@reduxjs/toolkit';

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

export const { addToDo, deleteToDo } = toDos.actions;

export default toDos.reducer;
