import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Todo } from "../components/Todo/Todo";
import { Layout } from "../components/Layout";

export const Navigate = () => {
  console.log("Navigate");
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Todo />} />
        <Route path="notes" element={<div>TEst</div>} />
        <Route path="others1" element={<div>TEst</div>} />
        <Route path="others2" element={<div>TEst</div>} />
      </Route>
    </Routes>
  );
};
