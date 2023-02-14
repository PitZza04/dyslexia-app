import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./viewSlice";
import sortReducer from "./sortSlice";
export const store = configureStore({
  reducer: {
    view: viewReducer,
    sort: sortReducer,
  },
});
