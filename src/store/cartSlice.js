import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {},
  },
  reducers: {
    increment: (state, data) => {
      let articul = data.payload;
      if (state.value[articul] === undefined) state.value[articul] = 0;
      state.value[articul]++;
    },
    minus: (state, data) => {
      let articul = data.payload;
      if (state.value[articul] === undefined) state.value[articul] = 0;
      state.value[articul]--;
      if (state.value[articul] === undefined || state.value[articul] <= 0)
        delete state.value[articul];
    },
    del: (state, data) => {
      let articul = data.payload;
      if (state.value[articul] === undefined) state.value[articul] = 0;
      delete state.value[articul];
    },
  },
});

export const { increment, minus, del } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;
export default cartSlice.reducer;
