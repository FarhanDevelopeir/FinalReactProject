import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storeUserData: [
        {
            Email: "farhan@mail.com",
            Name: "Farhan",
            No: "03070582931"
        },
        {
            Email: "ali@mail.com",
            Name: "Ali",
            No: "0372918463"
        },
        {
            Email: "maaz@mail.com",
            Name: "Maaz",
            No: "01628293917"
        },
    ]
};

const HomeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {
        updateData: (state, action) => {
            state.storeUserData = action.payload;
        },
        removeUser: (state, action) => {
            // Remove user based on Name instead of id
            state.storeUserData = state.storeUserData.filter(
                (user) => user.Name !== action.payload // Remove user with the specific Name
            );
        }
    }
});

export const { updateData, removeUser } = HomeSlice.actions;

export default HomeSlice.reducer;
