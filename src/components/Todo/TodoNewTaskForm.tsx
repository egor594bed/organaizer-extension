import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/todo";

export const TodoNewTaskForm = () => {
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
      <TextField
        onChange={(e) => setFormInput(e.target.value)}
        value={formInput}
        label="Новая задача"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" disabled={formInput.trim().length < 1}>
                <AddIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ width: "100%", paddingBottom: 1 }}
      ></TextField>
    </form>
  );
};
