import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  data: {
    email: string;
    password: string;
    jwt: string;
    loggedIn: boolean;
  };
  isLoading: boolean;
}

const initialState: AuthState = {
  data: {
    email: "",
    password: "",
    jwt: "",
    loggedIn: false,
  },
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setData, setIsLoading } = authSlice.actions;

export default authSlice.reducer;
