import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import LocalStorageService from "../../services/local-storage-service";

interface INotesSlice {
  noteList: Note[];
}

const initialState: INotesSlice = {
  noteList: LocalStorageService.getLocalStorageData<Note>("notes_storage"),
};

export const notesSlice = createSlice({
  name: "notesSlice",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.noteList = [action.payload, ...state.noteList];
      LocalStorageService.saveNewData(state.noteList, "notes_storage");
    },
    removeNote(state, action: PayloadAction<string>) {
      state.noteList = state.noteList.filter((elem) => {
        if (elem.id === action.payload) return false;
        return true;
      });
      LocalStorageService.saveNewData(state.noteList, "notes_storage");
    },
    showNote(state, action: PayloadAction<string>) {
      state.noteList = state.noteList.map((elem) => {
        if (elem.id === action.payload) {
          return { ...elem, show: !elem.show };
        }
        return elem;
      });
      LocalStorageService.saveNewData(state.noteList, "notes_storage");
    },
  },
});

export const { addNote, removeNote, showNote } = notesSlice.actions;

export default notesSlice.reducer;
