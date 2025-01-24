import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../tools/supabase";

const initialState = {
    blogs: [],
    isLoading: false,
    error: null,
}

export const fetchBlogs = createAsyncThunk('blog/fetchBlogs', async () => {
    const { data, error } = await supabase
        .from('blog')
        .select('*')
    if (error) {
        return
    }

    return data
})

const blogSlice = createSlice({
    name: 'blog',
    initialState, 

    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
            state.isLoading = false
            state.error = null
        }),
        builder.addCase(fetchBlogs.pending, (state, action) => {
            state.isLoading = true
        }),
        builder.addCase(fetchBlogs.rejected, (state, action) => {
            state.error = action.error.message
            state.isLoading = false
        })
    }
})

export default blogSlice.reducer