import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storeUserData: []
};

const HomeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {
        updateData: (state, action) => {
            state.storeUserData = action.payload;
        },
        removeUser: (state, action) => {
            state.storeUserData = state.storeUserData.filter((user) => user.Name !== action.payload);
        }
    }
});

export const { updateData,removeUser } = HomeSlice.actions;

export default HomeSlice.reducer;
