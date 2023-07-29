import React, { FC } from "react";
import { Divider, List, ListItem, Typography } from "@mui/material";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { TodoTask } from "./TodoTask";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Task } from "../../types/TodoTypes";

interface ITodoList {}

export const TodoList: FC<ITodoList> = () => {
  const [parent] = useAutoAnimate();
  const taskList: Task[] = useSelector(
    (state: RootState) => state.todo.taskList
  );
  return (
    <List
      ref={parent}
      sx={{ height: "445px", overflowY: "auto", overflowX: "hidden" }}
    >
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
    </List>
  );
};
