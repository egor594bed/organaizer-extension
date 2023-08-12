import React, { useEffect } from "react";
import { NotesNewNoteForm } from "./NotesNewNoteForm";
import { NotesList } from "./NotesList";
import { useDispatch } from "react-redux";
import { getNotes } from "../../redux/slices/notes";
import { AppDispatch } from "../../redux/store";

export const Notes = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (
    <>
      <NotesNewNoteForm />
      <NotesList />
    </>
  );
};
