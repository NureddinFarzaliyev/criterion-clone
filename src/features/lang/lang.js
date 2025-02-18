import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('lang') || 'en'

const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        changeLang: (state, action) => {
            return action.payload
        }
    }
})

export const { changeLang } = langSlice.actions
export default langSlice.reducer