import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userDetailSlice",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            console.log("i am the state",state )
            console.log("actionnnnnn", action)
            return action.payload;
        },
        removeUser: (state, action) => {
            return null
        }
    }
})
export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer;