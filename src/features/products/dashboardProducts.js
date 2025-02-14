import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
    error: null,
    totalPages: 0
}

const dashboardProductsSlice = createSlice({
    name: 'dashboardProductsSlice',
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


export const { setProducts, setLoading, setError, setTotalPages, setIsPagination } = dashboardProductsSlice.actions;
export default dashboardProductsSlice.reducer