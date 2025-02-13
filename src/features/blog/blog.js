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

    reducers: {
        addBlog: (state, action) => {
            state.blogs.push(action.payload)
        },
        removeBlog: (state, action) => {
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload)
        }
    },

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

export const { addBlog, removeBlog } = blogSlice.actions
export default blogSlice.reducer