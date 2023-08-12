import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import localStorageService from "../../services/local-storage-service";
import dataApiService from "../../services/data-api-service";
import { TNote, TNotesGroup } from "../../types/NotesTypes";

interface INotesSlice {
  noteList: TNotesGroup[];
  loading: boolean;
}

const initialState: INotesSlice = {
  noteList: localStorageService.getLocalStorageData<TNotesGroup>("notes"),
  loading: false,
};

export const getNotes = createAsyncThunk("notesSlice/getNotes", () => {
  try {
    return dataApiService.getData<TNotesGroup[]>("notes");
  } catch (error) {}
});

export const notesSlice = createSlice({
  name: "notesSlice",
  initialState,
  reducers: {
    addNoteGroup(state, action: PayloadAction<TNotesGroup>) {
      state.noteList = [action.payload, ...state.noteList];
      localStorageService.saveNewData(state.noteList, "notes");
    },
    addNoteInGroup(
      state,
      action: PayloadAction<{ groupName: string; note: TNote }>
    ) {
      state.noteList = state.noteList.map((TNotesGroup) => {
        if (TNotesGroup.groupName === action.payload.groupName) {
          return {
            ...TNotesGroup,
            notes: [...TNotesGroup.notes, action.payload.note],
          };
        }
        return TNotesGroup;
      });
      localStorageService.saveNewData(state.noteList, "notes");
    },
    removeNoteGroup(state, action: PayloadAction<string>) {
      state.noteList = state.noteList.filter((noteGroup) => {
        if (noteGroup.id === action.payload) return false;
        return true;
      });

      localStorageService.saveNewData(state.noteList, "notes");
    },
    removeNote(state, action: PayloadAction<string>) {
      state.noteList = state.noteList.map((noteGroup) => {
        noteGroup.notes = noteGroup.notes.filter((elem) => {
          if (elem.id === action.payload) return false;
          return true;
        });
        return noteGroup;
      });

      localStorageService.saveNewData(state.noteList, "notes");
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
      localStorageService.saveNewData(state.noteList, "notes");
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
      localStorageService.saveNewData(state.noteList, "notes");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNotes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getNotes.fulfilled,
      (state, action: PayloadAction<TNotesGroup[] | undefined>) => {
        state.loading = false;
        if (!action.payload) return;
        state.noteList = action.payload;
        localStorageService.saveNewData(state.noteList, "notes");
      }
    );
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
