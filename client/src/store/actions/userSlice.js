import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    showLogin : false,
    user : false,
    showSetup : false
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setLogin : (state, action) => {
            state.showLogin = action.payload;
        },
        setUser : (state, action) => {
            state.user = action.payload
        },
        setInterviewSetup : (state, action) => {
            state.showSetup = action.payload
        }
    }
})

export const { setLogin, setUser, setInterviewSetup } = userSlice.actions
export default userSlice.reducer