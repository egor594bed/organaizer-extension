import React, { FC, useState } from "react";
import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          onChange={(e) => setFormInput(e.target.value)}
          value={formInput}
          label="Новая задача"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  disabled={formInput.trim().length < 1}
                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ flex: 1, marginRight: 1 }}
        ></TextField>
      </Box>
    </form>
  );
};
