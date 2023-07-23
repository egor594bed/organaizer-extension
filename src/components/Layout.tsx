import React from "react";
import { Todo } from "./Todo/Todo";
import { Container } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const Layout = () => {
  return (
    <Container>
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </Container>
  );
};
