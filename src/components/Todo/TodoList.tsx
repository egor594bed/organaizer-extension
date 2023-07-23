import React, { FC } from "react";
import { List, ListItem, Typography } from "@mui/material";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { TodoTask } from "./TodoTask";
import { Task } from "../../types/TodoTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface ITodoList {}

export const TodoList: FC<ITodoList> = () => {
  const [parent, enableAnimations] = useAutoAnimate();
  const taskList: Task[] = useSelector(
    (state: RootState) => state.todo.taskList
  );
  return (
    <List ref={parent}>
      {taskList.length > 0 ? (
        taskList.map((taskData) => {
          return (
            <ListItem key={taskData.id}>
              <TodoTask taskData={taskData} />
            </ListItem>
          );
        })
      ) : (
        <Typography>Список задач пуст</Typography>
      )}
    </List>
  );
};
