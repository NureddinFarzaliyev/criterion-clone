import { configureStore } from "@reduxjs/toolkit";
import highlightedBlogsReducer from '../features/blog/highlightedBlogs.js'
import blogReducer from '../features/blog/blog.js'
import HighlightedProductsReducer from "../features/products/highlightedProducts.js";

export const store = configureStore({
    reducer: {
        highlightedBlogs: highlightedBlogsReducer,
        blog: blogReducer,
        highlightedProducts: HighlightedProductsReducer,
    },
})