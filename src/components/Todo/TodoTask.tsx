import React, { FC, memo } from "react";
import {
  Checkbox,
  IconButton,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "../../types/TodoTypes";
import { removeTask, toggleTask } from "../../redux/slices/todo";
import { useDispatch } from "react-redux";

interface ITodoTask {
  taskData: Task;
}

export const TodoTask: FC<ITodoTask> = memo(({ taskData }) => {
  const dispatch = useDispatch();
  const removeHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(removeTask(taskData.id));
  };
  const toggleTaskHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(toggleTask(taskData.id));
  };

  return (
    <>
      <ListItemButton onClick={(e) => toggleTaskHandler(e)}>
        <Checkbox checked={taskData.done} />
        <ListItemText
          primary={taskData.text}
          sx={{ textDecoration: taskData.done ? "line-through" : "" }}
        ></ListItemText>
        <IconButton onClick={(e) => removeHandler(e)}>
          <DeleteIcon />
        </IconButton>
      </ListItemButton>
    </>
  );
});
