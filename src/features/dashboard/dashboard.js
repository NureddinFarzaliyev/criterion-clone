import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../tools/supabase";

const initialState = {
    loading: false,
    error: null,
    ordersData: [],
}

export const fetchOrdersData = createAsyncThunk('dashboard/fetchOrdersData', async () => {
    const {data, error} = await supabase
    .from('orders')
    .select('*')
    if(error) throw error
    return data
})

const dashboardSlice = createSlice({
    name: 'dashboardSlice',
    initialState,

    extraReducers: (builder) => {
        builder
        .addCase(fetchOrdersData.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchOrdersData.fulfilled, (state, action) => {
            state.loading = false
            state.ordersData = action.payload
        })
        .addCase(fetchOrdersData.rejected, (state) => {
            state.loading = false
            state.error = 'Failed to fetch orders data'
        })
    }
})

export default dashboardSlice.reducer