import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import TodoLocalStorageService from "../../services/local-storage-service";
import { Task } from "../../types/TodoTypes";

interface ITodoSlice {
  taskList: Task[];
}

const initialState: ITodoSlice = {
  taskList: TodoLocalStorageService.getLocalStorageTasks(),
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.taskList = [action.payload, ...state.taskList];
      TodoLocalStorageService.saveNewTasksArr(state.taskList);
    },
    removeTask(state, action: PayloadAction<string>) {
      state.taskList = state.taskList.filter((elem) => {
        if (elem.id === action.payload) return false;
        return true;
      });
      TodoLocalStorageService.saveNewTasksArr(state.taskList);
    },
    toggleTask(state, action: PayloadAction<string>) {
      state.taskList = state.taskList.map((elem) => {
        if (elem.id === action.payload) {
          return { ...elem, done: !elem.done };
        }
        return elem;
      });
      TodoLocalStorageService.saveNewTasksArr(state.taskList);
    },
  },
});

export const { addTask, removeTask, toggleTask } = todoSlice.actions;

export default todoSlice.reducer;
