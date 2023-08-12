import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/task";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import {
  Accordion,
  AccordionDetails,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import CloseIcon from "@mui/icons-material/Close";
import dayjs from "dayjs";
import { TTask } from "../../types/TodoTypes";

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  padding: 0,
  ".MuiAccordionSummary-content": {
    margin: 0,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "transparent",
  },
}));

export const TaskForm = () => {
  const [formInput, setFormInput] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useDispatch();
  const [settings, setSettings] = useState({
    deadline: false,
  });
  const [deadlineTime, setDeadlineTime] = useState(dayjs().add(1, "day"));
  const firstInput = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask: TTask = {
      id: String(Date.now()),
      text: formInput.trim(),
      done: false,
      deadline: settings.deadline ? deadlineTime : false,
    };
    dispatch(addTask(newTask));
    setFormInput("");
    setShowSettings(false);
  };

  const handleSettings = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOnBlur = () => {
    if (formInput.trim().length < 1) {
      setShowSettings(false);
    }
  };

  return (
    <form onSubmit={(e) => todoSubmitHandler(e)}>
      <Accordion
        expanded={showSettings}
        disableGutters
        elevation={0}
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
            onBlur={() => handleOnBlur()}
            value={formInput}
            label="Новая задача"
            variant="outlined"
            inputRef={firstInput}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="button"
                    disabled={formInput.trim().length < 1}
                    onClick={() => {
                      setFormInput("");
                      firstInput.current?.focus();
                    }}
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
