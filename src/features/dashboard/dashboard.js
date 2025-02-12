import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../tools/supabase";

const initialState = {
    loading: false,
    error: null,
    ordersData: [],
    statistics: null,
}

export const fetchOrdersData = createAsyncThunk('dashboard/fetchOrdersData', async () => {
    const {data, error} = await supabase
    .from('orders')
    .select('*')
    if(error) throw error
    return data
})

export const fetchStatistics = createAsyncThunk('dashboard/fetchStatistics', async () => {
    let { data, error } = await supabase.rpc('fetch_statistics')
    if (error) return console.error(error)
    return data
})

const dashboardSlice = createSlice({
    name: 'dashboardSlice',
    initialState,

    extraReducers: (builder) => {
        builder
        // Order Section
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

        // Home Statistics
        .addCase(fetchStatistics.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchStatistics.fulfilled, (state, action) => {
            state.loading = false
            state.statistics = action.payload
        })
        .addCase(fetchStatistics.rejected, (state) => {
            state.loading = false
            state.error = 'Failed to fetch statistics'  
        })

    }
})

export default dashboardSlice.reducer