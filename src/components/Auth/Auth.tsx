import React from "react";
import { Container } from "@mui/material";
import { AuthForm } from "./AuthForm";

export const Auth = () => {
  return (
    <Container sx={{ height: "100%", marginTop: 3, marginBottom: 1 }}>
      <AuthForm></AuthForm>
    </Container>
  );
};
