import { configureStore } from "@reduxjs/toolkit";
import task from "./slices/task";
import notes from "./slices/notes";
import auth from "./slices/auth";

export const store = configureStore({
  reducer: {
    task,
    notes,
    auth,
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
