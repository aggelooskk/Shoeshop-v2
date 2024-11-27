import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productReducer from "./Slices/productSlice";
import userReducer from "./Slices/userSlice"
import adminReducer from "./Slices/adminSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    user: userReducer,
    admin: adminReducer,
  },
});

export default store;
