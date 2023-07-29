import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { addTask } from "../../redux/slices/todo";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import CloseIcon from "@mui/icons-material/Close";
import dayjs from "dayjs";
import { Task } from "../../types/TodoTypes";

export const TodoNewTaskForm = () => {
  const [formInput, setFormInput] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useDispatch();
  const [settings, setSettings] = useState({
    deadline: false,
  });
  const [deadlineTime, setDeadlineTime] = useState(dayjs().add(1, "day"));

  const todoSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask: Task = {
      id: String(Date.now()),
      text: formInput.trim(),
      done: false,
      deadline: settings.deadline ? deadlineTime : false,
    };
    dispatch(addTask(newTask));
    setFormInput("");
  };

  const handleSettings = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <form onSubmit={(e) => todoSubmitHandler(e)}>
      <Accordion
        expanded={showSettings}
        disableGutters
        elevation={0}
        //TODO: Убрать поинтер
        sx={{
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary>
          <TextField
            onChange={(e) => setFormInput(e.target.value)}
            onFocus={() => setShowSettings(true)}
            value={formInput}
            label="Новая задача"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    disabled={formInput.trim().length < 1}
                    onClick={() => setFormInput("")}
                  >
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ width: "100%", paddingBottom: 1 }}
          ></TextField>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingTop: 0 }}>
          <Box
            sx={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              label="Установить дедлайн"
              control={
                <Checkbox
                  onChange={handleSettings}
                  checked={settings.deadline}
                  name="deadline"
                />
              }
            />
            <DateTimePicker
              defaultValue={deadlineTime}
              ampm={false}
              onChange={(value) => setDeadlineTime(dayjs(value))}
              disabled={!settings.deadline}
              sx={{ width: "100%" }}
            />
          </Box>
          <Button
            type="submit"
            variant="outlined"
            disabled={formInput.trim().length < 1}
            sx={{ width: "100%", marginTop: 3 }}
          >
            <Typography>Добавить задачу</Typography>
          </Button>
        </AccordionDetails>
      </Accordion>
    </form>
  );
};
