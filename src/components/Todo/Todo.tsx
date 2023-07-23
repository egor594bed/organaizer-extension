import React from "react";
import { TodoNewTaskForm } from "./TodoNewTaskForm";
import { TodoList } from "./TodoList";
import TodoLocalStorageService from "../../services/local-storage-service";
export const Todo = () => {
  return (
    <>
      <TodoNewTaskForm />
      <TodoList />
    </>
  );
};
