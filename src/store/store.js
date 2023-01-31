import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from "./slices/portfolioSlice";

const store = configureStore({
  reducer: {
    portfolio: portfolioSlice,
  },
});

export default store;
