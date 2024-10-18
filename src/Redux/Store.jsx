import { configureStore } from "@reduxjs/toolkit";
import HomePageSlice from "../Components/features/HomePageSlice";

export const store = configureStore({
  reducer: {
    homepage: HomePageSlice,
  },
});

export default store;
