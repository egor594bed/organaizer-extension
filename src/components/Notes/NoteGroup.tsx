import React, { FC } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Note } from "./Note";
import { addNoteInGroup, removeNoteGroup } from "../../redux/slices/notes";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { MyAddInput } from "../UI/MyAddInput/MyAddInput";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { TNotesGroup } from "../../types/NotesTypes";

interface INoteGroup {
  notesGroupData: TNotesGroup;
}

export const NoteGroup: FC<INoteGroup> = ({ notesGroupData }) => {
  const [parent] = useAutoAnimate();
  const dispatch = useDispatch();

  const removeHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(removeNoteGroup(notesGroupData.id));
  };

  const addNote = (value: string) => {
    const newNote = {
      id: String(Date.now()),
      text: value,
      show: true,
    };
    dispatch(
      addNoteInGroup({ groupName: notesGroupData.groupName, note: newNote })
    );
  };

  return (
    <Accordion sx={{ width: "100%" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>{notesGroupData.groupName}</Typography>
          <IconButton
            onClick={(e) => removeHandler(e)}
            sx={{ justifySelf: "end", alignSelf: "end" }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <List ref={parent}>
          {notesGroupData.notes &&
            notesGroupData.notes.map((noteData) => {
              return (
                <ListItem sx={{ padding: 0 }} key={noteData.id}>
                  <Note noteData={noteData} />
                </ListItem>
              );
            })}
        </List>
        <MyAddInput getValue={addNote}></MyAddInput>
      </AccordionDetails>
    </Accordion>
  );
};
