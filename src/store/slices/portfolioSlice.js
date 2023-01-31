import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  name: "Portfolio",
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
});

export const {} = portfolioSlice.actions;

export default portfolioSlice.reducer;
