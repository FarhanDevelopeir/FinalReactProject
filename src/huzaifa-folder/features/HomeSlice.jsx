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
            //  state.storeUserData.filter((user) => user.Name !== action.payload);
            const filteredUsers = state.storeUserData.filter((user) => user.Name !== action.payload);
            state.storeUserData = filteredUsers;
        }
    }
});

export const { updateData,removeUser } = HomeSlice.actions;

export default HomeSlice.reducer;
