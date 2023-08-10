import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { Navigate } from "./navigate/Navigate";
import { checkAuth } from "./redux/slices/auth";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return <Navigate />;
}

export default App;
