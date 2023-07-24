import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  userId: "",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { setMode } = authSlice.actions;
export default authSlice.reducer;
