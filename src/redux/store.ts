import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todo";
import notes from "./slices/notes";

export const store = configureStore({
  reducer: {
    todo,
    notes,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
