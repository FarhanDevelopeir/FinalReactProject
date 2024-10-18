import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    count : 0
}

const HomePageSlice = createSlice({
      name : 'homepage',
      initialState,
      reducers:{
            UpdateCounts : (state, action)=>{
                  state.count = action.payload
            }
      }
})

export const {UpdateCounts} =  HomePageSlice.actions

export default HomePageSlice.reducer

