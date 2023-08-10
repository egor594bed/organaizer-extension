import React, { useEffect } from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { getTasks } from "../../redux/slices/task";
import { AppDispatch } from "../../redux/store";
export const Task = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TaskForm />
      <TaskList />
    </LocalizationProvider>
  );
};
