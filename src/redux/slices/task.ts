import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import localStorageService from "../../services/local-storage-service";
import { TTask } from "../../types/TodoTypes";
import dataApiService from "../../services/data-api-service";

interface ITodoSlice {
  taskList: TTask[];
  loading: boolean;
}

const initialState: ITodoSlice = {
  taskList: localStorageService.getLocalStorageData<TTask>("tasks"),
  loading: false,
};

export const getTasks = createAsyncThunk("taskSlice/getTasks", () => {
  try {
    return dataApiService.getData<TTask[]>("tasks");
  } catch (error) {}
});

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<TTask>) => {
        state.taskList = [action.payload, ...state.taskList];
        localStorageService.saveNewData(state.taskList, "tasks");
      },
      prepare: (task: TTask) => ({ payload: task }),
    },
    removeTask(state, action: PayloadAction<string>) {
      state.taskList = state.taskList.filter((elem) => {
        if (elem.id === action.payload) return false;
        return true;
      });
      localStorageService.saveNewData(state.taskList, "tasks");
    },
    toggleTask(state, action: PayloadAction<string>) {
      state.taskList = state.taskList.map((elem) => {
        if (elem.id === action.payload) {
          return { ...elem, done: !elem.done };
        }
        return elem;
      });
      localStorageService.saveNewData(state.taskList, "tasks");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getTasks.fulfilled,
      (state, action: PayloadAction<TTask[] | undefined>) => {
        state.loading = false;
        if (!action.payload) return;
        state.taskList = action.payload;
        localStorageService.saveNewData(state.taskList, "tasks");
      }
    );
  },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
