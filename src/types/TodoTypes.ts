import dayjs from "dayjs";

export type TTask = {
  id: string;
  text: string;
  done: boolean;
  deadline: boolean | dayjs.Dayjs;
  actualData?: boolean;
};
