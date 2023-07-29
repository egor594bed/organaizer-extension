import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import LocalStorageService from "../../services/local-storage-service";
import { Task } from "../../types/TodoTypes";

interface ITodoSlice {
  taskList: Task[];
}

const initialState: ITodoSlice = {
  taskList: LocalStorageService.getLocalStorageData<Task>("todo_storage"),
};

//TODO
// A non-serializable value was detected in an action, in the path: `payload.deadline`. Value: M {$L: 'en', $u: undefined, $d: Mon Jul 31 2023 12:20:43 GMT+0300 (Москва, стандартное время), $x: {…}, $y: 2023, …}
// Take a look at the logic that dispatched this action:  {type: 'todoSlice/addTask', payload: {…}}
// (See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)
// (To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)

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
