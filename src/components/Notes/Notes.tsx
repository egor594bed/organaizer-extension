import React from "react";
import { NotesNewNoteForm } from "./NotesNewNoteForm";
import { NotesList } from "./NotesList";

export const Notes = () => {
  return (
    <>
      <NotesNewNoteForm />
      <NotesList />
    </>
  );
};
