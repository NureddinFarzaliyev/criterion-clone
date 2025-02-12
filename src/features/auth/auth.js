import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    userId: null,
    role: null,
    isLoading: false,
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,

    reducers: {
        setAuth: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated
            state.userId = action.payload.userId
            state.role = action.payload.role
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const { setAuth, setLoading } = authSlice.actions;
export default authSlice.reducer