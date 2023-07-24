import React from "react";
import { Route, Routes } from "react-router-dom";
import { Todo } from "../components/Todo/Todo";
import { Layout } from "../components/Layout";
import { Notes } from "../components/Notes/Notes";

export const Navigate = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Todo />} />
        <Route path="notes" element={<Notes />} />
        <Route path="others1" element={<div>TEst</div>} />
        <Route path="others2" element={<div>TEst</div>} />
      </Route>
    </Routes>
  );
};
