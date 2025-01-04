import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import authSlice from "./slices/authSlice";
import menuSlice from "./slices/menuSlice";

export const store = configureStore({
    reducer: {
        productData: productSlice,
        auth: authSlice,
        menu: menuSlice
    },
  })