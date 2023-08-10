import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { TabBarNavigate } from "./TabBar/TabBarNavigate";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import localStorageService from "../services/local-storage-service";
import dataApiService from "../services/data-api-service";

export const Layout = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      dataApiService.saveData(
        "notes",
        localStorageService.getLocalStorageData("notes") || []
      );
      dataApiService.saveData(
        "tasks",
        localStorageService.getLocalStorageData("tasks") || []
      );
    }
  }, []);

  return (
    <>
      <TabBarNavigate />
      <Container sx={{ marginTop: 3, marginBottom: 1 }}>
        <Outlet />
      </Container>
    </>
  );
};
