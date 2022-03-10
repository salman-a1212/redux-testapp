import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  UserEmail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.UserEmail = action.payload.UserEmail;
    },
    setUserLogoutState: (state) => {
      state.userName = null;
      state.UserEmail = null;
    },
  },
});

export const { setActiveUser, setUserLogoutState } = userSlice.actions;

export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.UserEmail;

export default userSlice.reducer;
