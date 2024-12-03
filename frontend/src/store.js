import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productReducer from "./Slices/productSlice";
import userReducer from "./Slices/userSlice"
import adminReducer from "./Slices/adminSlice"
import authReducer from "./Slices/authSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    user: userReducer,
    admin: adminReducer,
    auth: authReducer,
  },
});

export default store;
