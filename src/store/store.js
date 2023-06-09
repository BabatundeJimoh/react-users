import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    usersReducer: usersReducer,
  },
});
