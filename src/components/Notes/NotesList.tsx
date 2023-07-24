import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { List, Typography } from "@mui/material";
import { NoteGroup } from "./NoteGroup";

export const NotesList = () => {
  const [parent] = useAutoAnimate();
  const NotesGroupList: NotesGroup[] = useSelector(
    (state: RootState) => state.notes.noteList
  );
  return (
    <List
      ref={parent}
      sx={{
        height: "445px",
        paddingLeft: "2px",
        paddingRight: "2px",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {NotesGroupList.length > 0 ? (
        NotesGroupList.map((notesGroupData) => {
          return (
            <React.Fragment key={notesGroupData.id}>
              <NoteGroup notesGroupData={notesGroupData} />
            </React.Fragment>
          );
        })
      ) : (
        <Typography>Список заметок пуст</Typography>
      )}
    </List>
  );
};
