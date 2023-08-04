import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useHttp } from "../../hooks/http.hook";
import { baseURL } from "../../const/config";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/slices/auth";

export const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { request, loading, error } = useHttp();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | null = null) => {
    if (e !== null) e.preventDefault();

    request(`${baseURL}/api/auth/login`, "POST", {
      email,
      password,
    }).then((data: { accessToken: string | undefined }) => {
      if (data?.accessToken)
        dispatch(setAuth({ isAuth: true, accessToken: data.accessToken }));
    });
  };

  const handleRegiser = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    request(`${baseURL}/api/auth/registration`, "POST", { email, password });
    if (!error) {
      handleSubmit();
    }
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => handleSubmit(e)}
      sx={{
        height: "75%",
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        "& .MuiTextField-root": { width: "100%", marginBottom: 2 },
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: 2, color: "primary.main" }}
      >
        Авторизация
      </Typography>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" type="submit" disabled={loading}>
          Войти
        </Button>
        <Button
          variant="outlined"
          type="button"
          onClick={(e) => handleRegiser(e)}
          disabled={loading}
        >
          Регистрация
        </Button>
      </Box>
      {error && <Typography sx={{ color: "error.main" }}>{error}</Typography>}
    </Box>
  );
};
