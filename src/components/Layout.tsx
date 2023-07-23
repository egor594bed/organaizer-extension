import React from "react";
import { Todo } from "./Todo/Todo";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const Layout = () => {
  return (
    <Provider store={store}>
      <Todo></Todo>
    </Provider>
  );
};
