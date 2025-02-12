import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../tools/supabase";

const initialState = {
    blogs: [],
    isLoading: false,
    error: null,
}

export const fetchHighlightedBlogs = createAsyncThunk('highlightedBlogs/fetchHighlightedBlogs', async () => {
    const { data, error } = await supabase
        .from('blog')
        .select('*')
        .eq('isHighlighted', true)
    if (error) {
        return
    }

    return data
})

const highlightedBlogsSlice = createSlice({
    name: 'highlightedBlogs',
    initialState,

    reducers: {
        removeHighlightedBlog: (state, action) => {
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload)
        },
        addHighlightedBlog: (state, action) => {
            state.blogs.push(action.payload)
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchHighlightedBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
            state.isLoading = false
            state.error = null
        })
        builder.addCase(fetchHighlightedBlogs.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchHighlightedBlogs.rejected, (state, action) => {
            state.error = action.error.message
            state.isLoading = false
        })
    }
})

export const { removeHighlightedBlog, addHighlightedBlog } = highlightedBlogsSlice.actions
export default highlightedBlogsSlice.reducer