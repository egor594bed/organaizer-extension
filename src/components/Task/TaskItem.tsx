import React, { FC, memo } from "react";
import {
  Box,
  Checkbox,
  IconButton,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeTask, toggleTask } from "../../redux/slices/task";
import { useDispatch } from "react-redux";
import { TTask } from "../../types/TaskTypes";
import dayjs from "dayjs";

interface ITodoTask {
  taskData: TTask;
}

export const TaskItem: FC<ITodoTask> = memo(({ taskData }) => {
  const dispatch = useDispatch();
  const removeHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(removeTask(taskData.id || taskData._id));
  };
  const toggleTaskHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(toggleTask(taskData.id));
  };

  return (
    <ListItemButton
      onClick={(e) => toggleTaskHandler(e)}
      sx={{ position: "relative" }}
    >
      <Checkbox checked={taskData.done} />
      <ListItemText
        primary={taskData.text}
        sx={{ textDecoration: taskData.done ? "line-through" : "" }}
      ></ListItemText>
      <IconButton onClick={(e) => removeHandler(e)}>
        <DeleteIcon />
      </IconButton>
      {taskData.deadline && (
        //Временное решение
        <Typography
          variant="caption"
          sx={{ position: "absolute", right: 0, bottom: 0 }}
        >
          {dayjs(taskData.deadline as dayjs.Dayjs).format("DD.MM.YYYY HH:mm")}
        </Typography>
      )}
    </ListItemButton>
  );
});
