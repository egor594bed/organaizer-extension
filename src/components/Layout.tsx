import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
  const [value, setValue] = React.useState("/");
  const navigate = useNavigate();
  console.log("Layout");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`${newValue}`);
  };
  return (
    <Box
      sx={{
        width: 400,
        height: "100%",
        border: "1px solid black",
      }}
    >
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab label="Задачи" value={"/"} />
        <Tab label="Заметки" value={"/notes"} />
        <Tab label="Что-то еще" value={"/others1"} />
        <Tab label="Что-то еще" value={"/others2"} />
      </Tabs>
      <Box sx={{ height: "92%", overflowY: "scroll" }}>
        <Outlet />
      </Box>
    </Box>
  );
};
