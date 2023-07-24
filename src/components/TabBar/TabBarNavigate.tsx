import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TabBarNavigate = () => {
  const [value, setValue] = useState("/");
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`${newValue}`);
  };
  return (
    <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
      <Tab label="Задачи" value={"/"} />
      <Tab label="Заметки" value={"/notes"} />
      <Tab label="Что-то еще" value={"/others1"} />
      <Tab label="Что-то еще" value={"/others2"} />
    </Tabs>
  );
};
