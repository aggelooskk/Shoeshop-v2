import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
  reducer: cartReducer,
});

export default store;
