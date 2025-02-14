import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../tools/supabase";

const initialState = {
    products: [],
    isLoading: false,
    error: null,
}

export const fetchHighlightedProducts = createAsyncThunk('highlightedProducts/fetchHighlightedProducts', async () => {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('isHighlighted', true)
    if (error) {
        console.error(error)
        return
    }

    return data
})

const highlightedProductsSlice = createSlice({
    name: 'highlightedProducts',
    initialState,

    reducers: {
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        addProduct: (state, action) => {
            state.products.push(action.payload)
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchHighlightedProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.isLoading = false
            state.error = null
        })
        builder.addCase(fetchHighlightedProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchHighlightedProducts.rejected, (state, action) => {
            state.error = action.error.message
            state.isLoading = false
        })
    }
})

export const { removeProduct, addProduct } = highlightedProductsSlice.actions
export default highlightedProductsSlice.reducer