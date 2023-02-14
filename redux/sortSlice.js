import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "sort-ascending",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    handleSort: (state) => {
      if (state.sort === "sort-ascending") {
        state.sort = "sort-descending";
      } else {
        state.sort = "sort-ascending";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleSort } = sortSlice.actions;

export default sortSlice.reducer;
