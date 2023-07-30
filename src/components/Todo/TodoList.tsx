import React, { FC } from "react";
import { Divider, ListItem, Typography } from "@mui/material";
import { TodoTask } from "./TodoTask";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Task } from "../../types/TodoTypes";
import { MyList } from "../UI/MyList/MyList";

interface ITodoList {}

export const TodoList: FC<ITodoList> = () => {
  const taskList: Task[] = useSelector(
    (state: RootState) => state.todo.taskList
  );
  return (
    <MyList>
      {taskList.length > 0 ? (
        taskList.map((taskData) => {
          return (
            <React.Fragment key={taskData.id}>
              <ListItem sx={{ padding: 0 }}>
                <TodoTask taskData={taskData} />
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
