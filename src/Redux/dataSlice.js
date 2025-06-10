import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("productData")) || [],
  keyword: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem("productData", JSON.stringify(state.data));
    },

    sortingDataFunc: (state, action) => {
      state.data = [
        ...state.data.sort((a, b) =>
          action.payload == "asc"
            ? a.price - b.price
            : action.payload == "desc"
            ? b.price - a.price
            : null
        ),
      ];
    },
    searchDataFunc: (state, action) => {
      state.keyword = action.payload;
    },

    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((item) => item.id !== action.payload)];
    },
    updateDataFunc: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
        localStorage.setItem("productData", JSON.stringify(state.data));
      }
    },
  },
});

// No actions to export since there are no reducers
export const {
  createDataFunc,
  deleteDataFunc,
  updateDataFunc,
  sortingDataFunc,
  searchDataFunc,
} = dataSlice.actions;

export default dataSlice.reducer;
