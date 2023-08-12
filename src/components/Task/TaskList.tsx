import React, { FC } from "react";
import { Divider, ListItem, Typography } from "@mui/material";
import { TaskItem } from "./TaskItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TTask } from "../../types/TaskTypes";
import { MyList } from "../UI/MyList/MyList";

interface ITodoList {}

export const TaskList: FC<ITodoList> = () => {
  const taskList: TTask[] = useSelector(
    (state: RootState) => state.task.taskList
  );
  return (
    <MyList>
      {taskList.length > 0 ? (
        taskList.map((taskData) => {
          return (
            <React.Fragment key={taskData.id || taskData._id}>
              <ListItem sx={{ padding: 0 }}>
                <TaskItem taskData={taskData} />
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })
      ) : (
        <Typography>Список задач пуст</Typography>
      )}
    </MyList>
  );
};
