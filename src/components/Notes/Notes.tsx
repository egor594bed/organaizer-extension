import React, { useEffect } from "react";
import { NotesNewNoteForm } from "./NotesNewNoteForm";
import { NotesList } from "./NotesList";
import { useDispatch } from "react-redux";
import { getNotes } from "../../redux/slices/notes";
import { AppDispatch } from "../../redux/store";
import dataApiService from "../../services/data-api-service";
import getNonActualData from "../../utils/getNonActualData";

export const Notes = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNotes());

    return () => {
      dataApiService.saveData("notes", getNonActualData("notes"));
    };
  }, []);

  return (
    <>
      <NotesNewNoteForm />
      <NotesList />
    </>
  );
};
