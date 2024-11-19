import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x._id === item._id);
      if (existingItem) {
        existingItem.qty += 1; // Increment quantity if item already exists
      } else {
        state.cartItems.push({ ...item, qty: 1 });
      }
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((x) => x._id !== itemId);
    },
    updateCartQty(state, action) {
      const { id, qty } = action.payload;
      const item = state.cartItems.find((x) => x._id === id);
      if (item) {
        item.qty = qty;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartQty } = cartSlice.actions;

export default cartSlice.reducer;
