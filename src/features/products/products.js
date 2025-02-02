import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
    error: null,
    totalPages: 0
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,

    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload
        }
    }
})


export const { setProducts, setLoading, setError, setTotalPages } = productsSlice.actions;
export default productsSlice.reducer