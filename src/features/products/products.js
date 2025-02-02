import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
    error: null,
    totalPages: 0,
    isPagination: false
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
        },
        setIsPagination: (state, action) => {
            state.isPagination = action.payload
        }
    }
})


export const { setProducts, setLoading, setError, setTotalPages, setIsPagination } = productsSlice.actions;
export default productsSlice.reducer