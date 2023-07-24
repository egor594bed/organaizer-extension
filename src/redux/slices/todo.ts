import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import LocalStorageService from "../../services/local-storage-service";

interface ITodoSlice {
  taskList: Task[];
}

const initialState: ITodoSlice = {
  taskList: LocalStorageService.getLocalStorageData<Task>("todo_storage"),
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.taskList = [action.payload, ...state.taskList];
      LocalStorageService.saveNewData(state.taskList, "todo_storage");
    },
    removeTask(state, action: PayloadAction<string>) {
      state.taskList = state.taskList.filter((elem) => {
        if (elem.id === action.payload) return false;
        return true;
      });
      LocalStorageService.saveNewData(state.taskList, "todo_storage");
    },
    toggleTask(state, action: PayloadAction<string>) {
      state.taskList = state.taskList.map((elem) => {
        if (elem.id === action.payload) {
          return { ...elem, done: !elem.done };
        }
        return elem;
      });
      LocalStorageService.saveNewData(state.taskList, "todo_storage");
    },
  },
});

export const { addTask, removeTask, toggleTask } = todoSlice.actions;

export default todoSlice.reducer;
