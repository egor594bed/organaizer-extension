type Note = {
  id: string;
  text: string;
  show: boolean;
};

type NotesGroup = {
  id: string;
  groupName: string;
  notes: Note[];
};
