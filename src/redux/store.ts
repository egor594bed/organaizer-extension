import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todo";
import notes from "./slices/notes";

export const store = configureStore({
  reducer: {
    todo,
    notes,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [`payload.deadline`],
        ignoredPaths: ["todo.taskList.0.deadline"],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
