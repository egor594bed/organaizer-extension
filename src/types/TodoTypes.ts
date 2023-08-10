import dayjs from "dayjs";

export type Task = {
  id: string;
  text: string;
  done: boolean;
  deadline: boolean | dayjs.Dayjs;
  actualData?: boolean;
};
