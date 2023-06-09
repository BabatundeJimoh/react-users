import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    {
      id: uuid(),
      name: "Ben Jee",
      email: "benjee@gmail.com",
    },

    {
      id: uuid(),
      name: "Baba",
      email: "baba@gmail.com",
    },

    {
      id: uuid(),
      name: "Tunde",
      email: "Tunde@gmail.com",
    },
  ],
  number: 0,
  count: 10,
};

const counterSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
  addNumber: (state) => {
    state.number = state.number + 1;
  },

  decreaseCount: (state) => {
    state.count = state.count - 1;
  },
});

export const { addUser, addNumber, decreaseCount } = counterSlice.actions;
export default counterSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer
