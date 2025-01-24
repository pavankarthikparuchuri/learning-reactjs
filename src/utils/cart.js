import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the states here
      console.log(action, "::action");
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.pop();
    },
    clearCart: (state) => {
      console.log(state, "::state");
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
