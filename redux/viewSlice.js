import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: "view-list",
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    handleView: (state) => {
      if (state.view === "view-list") {
        state.view = "view-grid";
      } else {
        state.view = "view-list";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleView } = viewSlice.actions;

export default viewSlice.reducer;
