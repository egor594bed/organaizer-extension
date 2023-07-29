import React from "react";
import { TodoNewTaskForm } from "./TodoNewTaskForm";
import { TodoList } from "./TodoList";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
export const Todo = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TodoNewTaskForm />
      <TodoList />
    </LocalizationProvider>
  );
};
