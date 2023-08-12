import dayjs from "dayjs";

export type TTask = {
  text: string;
  done: boolean;
  deadline: boolean | dayjs.Dayjs;
  actualData?: boolean;
} & ({ id: string; _id: never } | { id: never; _id: string });
