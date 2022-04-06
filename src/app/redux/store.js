import { dishReducer } from "./dishSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    dish: dishReducer,
  },
});
