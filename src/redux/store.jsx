import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../huzaifa-folder/features/HomeSlice";

export const store = configureStore({
    reducer: {
        HomePage : homeReducer
    }
})
 export default store