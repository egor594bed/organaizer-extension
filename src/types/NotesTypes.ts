export type TNote = {
  id: string;
  text: string;
  show: boolean;
};

export type TNotesGroup = {
  id: string;
  groupName: string;
  notes: TNote[];
  actualData?: boolean;
};
