import React, { useState, FC } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface IMyAddInput {
  getValue(formInput: string): void;
}

export const MyAddInput: FC<IMyAddInput> = ({ getValue }) => {
  const [formInput, setFormInput] = useState("");
  const sumbitHandler = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    getValue(formInput.trim());
    setFormInput("");
  };

  return (
    <TextField
      onChange={(e) => setFormInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") sumbitHandler(e);
      }}
      value={formInput}
      label="Новая заметка"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={(e) => sumbitHandler(e)}
              disabled={formInput.trim().length < 1}
            >
              <AddIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{ width: "100%", paddingBottom: 1 }}
    ></TextField>
  );
};
