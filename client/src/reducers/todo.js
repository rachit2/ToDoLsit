
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  
  initialState,
  
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
   
  },
  
});

export const { addTodos } = addTodoReducer.actions;
export const todo = addTodoReducer.reducer;