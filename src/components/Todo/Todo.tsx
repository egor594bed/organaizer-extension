import React from "react";
import { TodoNewTaskForm } from "./TodoNewTaskForm";
import { TodoList } from "./TodoList";
import { Box } from "@mui/material";
export const Todo = () => {
  return (
    <>
      <TodoNewTaskForm />
      <TodoList />
    </>
  );
};
