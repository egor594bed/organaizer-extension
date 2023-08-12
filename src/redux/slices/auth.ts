import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../const/config";
import authService from "../../services/auth-service";
const initialState = {
  isAuth: false,
  loading: false,
  offlineMode: false,
};

export const checkAuth = createAsyncThunk("authSlice/checkAuth", async () => {
  return authService.verifyTokens();
});

export const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ isAuth: boolean; accessToken: string }>
    ) => {
      state.isAuth = action.payload.isAuth;
      localStorage.setItem("accessToken", action.payload.accessToken);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuth.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      checkAuth.fulfilled,
      (state, action: PayloadAction<boolean>) => {
        state.isAuth = action.payload;
      }
    );
  },
});
export const { setAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
