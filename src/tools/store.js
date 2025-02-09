import { configureStore } from "@reduxjs/toolkit";
import highlightedBlogsReducer from '../features/blog/highlightedBlogs.js'
import blogReducer from '../features/blog/blog.js'
import highlightedProductsReducer from "../features/products/highlightedProducts.js";
import productsReducer from '../features/products/products.js'
import authReducer from '../features/auth/auth.js'

export const store = configureStore({
    reducer: {
        highlightedBlogs: highlightedBlogsReducer,
        blog: blogReducer,
        highlightedProducts: highlightedProductsReducer,
        products: productsReducer,
        auth: authReducer
    },
})