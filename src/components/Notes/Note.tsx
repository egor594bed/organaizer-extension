import React, { FC } from "react";
import { useDispatch } from "react-redux";
import {
  IconButton,
  ListItemButton,
  ListItemText,
  Skeleton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeNote, showNote } from "../../redux/slices/notes";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface INote {
  noteData: Note;
}

export const Note: FC<INote> = ({ noteData }) => {
  const dispatch = useDispatch();
  const removeHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(removeNote(noteData.id));
  };
  const toggleShowHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(showNote(noteData.id));
  };

  return (
    <>
      <ListItemButton onClick={(e) => toggleShowHandler(e)}>
        <IconButton>
          {noteData.show ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
        <ListItemText
          primary={
            noteData.show ? (
              noteData.text
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            )
          }
        ></ListItemText>
        <IconButton onClick={(e) => removeHandler(e)}>
          <DeleteIcon />
        </IconButton>
      </ListItemButton>
    </>
  );
};
