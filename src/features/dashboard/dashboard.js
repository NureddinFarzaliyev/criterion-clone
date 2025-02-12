import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
}

const dashboardSlice = createSlice({
    name: 'dashboardSlice',
    initialState,

    reducers: {
        setStatistics: (state, action) => {
            state.statistics = action.payload
        },
    }
})