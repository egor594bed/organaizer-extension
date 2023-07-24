import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Divider, List, ListItem, Typography } from "@mui/material";
import { Note } from "./Note";

export const NotesList = () => {
  const [parent] = useAutoAnimate();
  const NotesList: Note[] = useSelector(
    (state: RootState) => state.notes.noteList
  );
  return (
    <List
      ref={parent}
      sx={{ height: "445px", overflowY: "auto", overflowX: "hidden" }}
    >
      {NotesList.length > 0 ? (
        NotesList.map((noteData) => {
          return (
            <React.Fragment key={noteData.id}>
              <ListItem sx={{ padding: 0 }}>
                <Note noteData={noteData} />
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })
      ) : (
        <Typography>Список заметок пуст</Typography>
      )}
    </List>
  );
};
