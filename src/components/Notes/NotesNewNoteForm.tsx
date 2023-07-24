import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { addNoteGroup } from "../../redux/slices/notes";

export const NotesNewNoteForm = () => {
  const [formInput, setFormInput] = useState("");
  const dispatch = useDispatch();

  const noteSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newNote: NotesGroup = {
      id: String(Date.now()),
      groupName: formInput.trim(),
      notes: [],
    };
    dispatch(addNoteGroup(newNote));
    setFormInput("");
  };

  return (
    <form onSubmit={(e) => noteSubmitHandler(e)}>
      <TextField
        onChange={(e) => setFormInput(e.target.value)}
        value={formInput}
        label="Новая заметка"
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
