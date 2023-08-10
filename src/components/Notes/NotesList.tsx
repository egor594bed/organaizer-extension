import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Typography } from "@mui/material";
import { NoteGroup } from "./NoteGroup";
import { MyList } from "../UI/MyList/MyList";
import { TNotesGroup } from "../../types/NotesTypes";

export const NotesList = () => {
  const NotesGroupList: TNotesGroup[] = useSelector(
    (state: RootState) => state.notes.noteList
  );

  return (
    <MyList>
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
    </MyList>
  );
};
