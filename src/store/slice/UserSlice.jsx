import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    clearAllUser(state, action) {
      return (state = []);
    },
  },
});
export default UserSlice.reducer;
export const { addUser, removeUser, clearAllUser } = UserSlice.actions;
