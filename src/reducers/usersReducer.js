import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      name: "Ben Jee",
      email: "benjee@gmail.com",
      gen: 24,
    },

    {
      name: "Baba",
      email: "baba@gmail.com",
      gen: 20,
    },

    {
      name: "Tunde",
      email: "Tunde@gmail.com",
      gen: 28,
    },
  ],
};

const counterSlice = createSlice({
  name: "users",
  initialState,
  reducer: {},
});
export default counterSlice.reducer;
