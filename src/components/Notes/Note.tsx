import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {
  IconButton,
  InputAdornment,
  ListItemButton,
  ListItemText,
  Skeleton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { changeNoteText, removeNote, showNote } from "../../redux/slices/notes";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckIcon from "@mui/icons-material/Check";

interface INote {
  noteData: Note;
}

export const Note: FC<INote> = ({ noteData }) => {
  const [edit, setEdit] = useState(false);
  const [noteText, setNoteText] = useState(noteData.text);

  const dispatch = useDispatch();
  const removeHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(removeNote(noteData.id));
  };
  const toggleShowHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(showNote(noteData.id));
  };
  const saveEditText = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    e.preventDefault();
    dispatch(changeNoteText({ id: noteData.id, text: noteText }));
    setEdit(false);
  };

  return (
    <>
      <ListItemButton onClick={edit ? undefined : () => setEdit(!edit)}>
        {edit ? (
          <TextField
            value={noteText}
            variant="standard"
            onChange={(e) => setNoteText(e.target.value)}
            sx={{ width: "100%" }}
            autoFocus
            multiline
            InputProps={{
              onBlur: (e) => saveEditText(e),
            }}
          ></TextField>
        ) : (
          <ListItemText
            primary={
              noteData.show ? (
                noteData.text
              ) : (
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              )
            }
            sx={{ wordBreak: "break-word" }}
          ></ListItemText>
        )}
        <IconButton onClick={(e) => toggleShowHandler(e)}>
          {noteData.show ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
        <IconButton onClick={(e) => removeHandler(e)}>
          <DeleteIcon />
        </IconButton>
      </ListItemButton>
    </>
  );
};
