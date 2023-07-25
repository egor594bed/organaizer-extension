import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import LocalStorageService from "../../services/local-storage-service";

interface INotesSlice {
  noteList: NotesGroup[];
}

const initialState: INotesSlice = {
  noteList:
    LocalStorageService.getLocalStorageData<NotesGroup>("notes_storage"),
};

export const notesSlice = createSlice({
  name: "notesSlice",
  initialState,
  reducers: {
    addNoteGroup(state, action: PayloadAction<NotesGroup>) {
      state.noteList = [action.payload, ...state.noteList];
      LocalStorageService.saveNewData(state.noteList, "notes_storage");
    },
    addNoteInGroup(
      state,
      action: PayloadAction<{ groupName: string; note: Note }>
    ) {
      state.noteList = state.noteList.map((notesGroup) => {
        if (notesGroup.groupName === action.payload.groupName) {
          return {
            ...notesGroup,
            notes: [...notesGroup.notes, action.payload.note],
          };
        }
        return notesGroup;
      });
      LocalStorageService.saveNewData(state.noteList, "notes_storage");
    },
    removeNoteGroup(state, action: PayloadAction<string>) {
      state.noteList = state.noteList.filter((noteGroup) => {
        if (noteGroup.id === action.payload) return false;
        return true;
      });

      LocalStorageService.saveNewData(state.noteList, "notes_storage");
    },
    removeNote(state, action: PayloadAction<string>) {
      state.noteList = state.noteList.map((noteGroup) => {
        noteGroup.notes = noteGroup.notes.filter((elem) => {
          if (elem.id === action.payload) return false;
          return true;
        });
        return noteGroup;
      });

      LocalStorageService.saveNewData(state.noteList, "notes_storage");
    },

    showNote(state, action: PayloadAction<string>) {
      state.noteList = state.noteList.map((noteGroup) => {
        const updatedNotes = noteGroup.notes.map((note) => {
          if (note.id === action.payload) {
            return { ...note, show: !note.show };
          }
          return note;
        });
        return { ...noteGroup, notes: updatedNotes };
      });
      LocalStorageService.saveNewData(state.noteList, "notes_storage");
    },
    changeNoteText(state, action: PayloadAction<{ text: string; id: string }>) {
      state.noteList = state.noteList.map((noteGroup) => {
        const updatedNotes = noteGroup.notes.map((note) => {
          if (note.id === action.payload.id) {
            return { ...note, text: action.payload.text };
          }
          return note;
        });
        return { ...noteGroup, notes: updatedNotes };
      });
      LocalStorageService.saveNewData(state.noteList, "notes_storage");
    },
  },
});

export const {
  addNoteGroup,
  addNoteInGroup,
  removeNote,
  removeNoteGroup,
  showNote,
  changeNoteText,
} = notesSlice.actions;

export default notesSlice.reducer;
