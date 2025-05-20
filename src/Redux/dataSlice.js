import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((item) => item.id !== action.payload)];
    },
    updateDataFunc: (state, action) => {
      state.data = [...state.data.map((item) => item.id == action.payload.id ? ({...item, ...action.payload}) : item )];
    },
  },
});

// No actions to export since there are no reducers
export const { createDataFunc, deleteDataFunc, updateDataFunc } = dataSlice.actions;

export default dataSlice.reducer;
