import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./dataSlice";
import { modalSlice } from "./modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    data: dataSlice.reducer,
  },
});

export default store;
