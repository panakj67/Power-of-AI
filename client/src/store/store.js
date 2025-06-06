import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./actions/userSlice.js" 

export const store = configureStore({
    reducer : {
        user : userReducer
    }
})