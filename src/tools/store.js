import { configureStore } from "@reduxjs/toolkit";
import highlightedBlogsReducer from '../features/blog/highlightedBlogs.js'
import blogReducer from '../features/blog/blog.js'

export const store = configureStore({
    reducer: {
        highlightedBlogs: highlightedBlogsReducer,
        blog: blogReducer
    },
})