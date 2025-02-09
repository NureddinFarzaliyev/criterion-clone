import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    userId: null,
    isLoading: false,
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,

    reducers: {
        setAuth: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated
            state.userId = action.payload.userId
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const { setAuth, setLoading } = authSlice.actions;
export default authSlice.reducer