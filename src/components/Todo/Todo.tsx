import React from "react";
import { TodoNewTaskForm } from "./TodoNewTaskForm";
import { TodoList } from "./TodoList";
import { Box } from "@mui/material";
export const Todo = () => {
  return (
    <Box sx={{ paddingTop: 3, paddingBottom: 1 }}>
      <TodoNewTaskForm />
      <TodoList />
    </Box>
  );
};
