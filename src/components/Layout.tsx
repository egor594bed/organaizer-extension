import React from "react";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { TabBarNavigate } from "./TabBar/TabBarNavigate";

export const Layout = () => {
  return (
    <Box
      sx={{
        maxWidth: 470,
        height: "100%",
        border: "1px solid black",
      }}
    >
      <TabBarNavigate />
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};
