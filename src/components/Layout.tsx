import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { TabBarNavigate } from "./TabBar/TabBarNavigate";

export const Layout = () => {
  return (
    <>
      <TabBarNavigate />
      <Container sx={{ marginTop: 3, marginBottom: 1 }}>
        <Outlet />
      </Container>
    </>
  );
};
