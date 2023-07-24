import React from "react";
import { TodoNewTaskForm } from "./TodoNewTaskForm";
import { TodoList } from "./TodoList";
export const Todo = () => {
  return (
    <>
      <TodoNewTaskForm />
      <TodoList />
    </>
  );
};
