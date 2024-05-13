import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../store/slice/UserSlice";

const store = configureStore({
  reducer: {
    users: UserSlice,
  },
});
export default store;
