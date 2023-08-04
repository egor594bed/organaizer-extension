import React from "react";
import { Route, Routes } from "react-router-dom";
import { Todo } from "../components/Todo/Todo";
import { Layout } from "../components/Layout";
import { Notes } from "../components/Notes/Notes";
import { Auth } from "../components/Auth/Auth";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Navigate = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <Routes>
      {isAuth ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Notes />} />
          <Route path="todo" element={<Todo />} />
          <Route path="others1" element={<div>TEst</div>} />
          <Route path="others2" element={<div>TEst</div>} />
        </Route>
      ) : (
        <Route path="/">
          <Route index element={<Auth />} />
        </Route>
      )}
    </Routes>
  );
};
