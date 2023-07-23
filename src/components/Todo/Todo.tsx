import React from "react";
import { TodoNewTaskForm } from "./TodoNewTaskForm";
import { TodoList } from "./TodoList";
import { Box, Container } from "@mui/material";
export const Todo = () => {
  return (
    <Container>
      <Box sx={{ paddingTop: 3 }}>
        <TodoNewTaskForm />
      </Box>
      <Box sx={{ paddingBottom: 1 }}>
        <TodoList />
      </Box>
    </Container>
  );
};
