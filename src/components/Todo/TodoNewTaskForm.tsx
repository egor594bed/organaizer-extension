import React, { FC, useState } from "react";
import { IconButton, Input } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/todo";

interface ITodoNewTaskForm {}

export const TodoNewTaskForm: FC<ITodoNewTaskForm> = () => {
  const [formInput, setFormInput] = useState("");
  const dispatch = useDispatch();

  const todoSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      id: String(Date.now()),
      text: formInput.trim(),
      done: false,
    };
    dispatch(addTask(newTask));
    setFormInput("");
  };

  return (
    <form onSubmit={(e) => todoSubmitHandler(e)}>
      <Input
        onChange={(e) => setFormInput(e.target.value)}
        value={formInput}
        placeholder="Новая задача"
      ></Input>
      <IconButton type="submit" disabled={formInput.trim().length < 1}>
        <AddIcon />
      </IconButton>
    </form>
  );
};
