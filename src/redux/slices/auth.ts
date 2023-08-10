import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../const/config";
const initialState = {
  isAuth: false,
  loading: false,
  offlineMode: false,
};

export const checkAuth = createAsyncThunk("authSlice/checkAuth", async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return false;

  try {
    const response = await fetch(`${baseURL}/api/auth/tokenVerification`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) return false;

    const data = await response.json();
    localStorage.setItem("accessToken", data.accessToken);

    return true;
  } catch (error) {
    return false;
  }
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
