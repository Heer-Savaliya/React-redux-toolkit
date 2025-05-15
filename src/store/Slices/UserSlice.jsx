import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: [],
    reducers:{
        // micro reducers
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            // console.log("hyy" + action.payload);
            state.splice(action.payload,1);     // splice(startIndex, deleteCount)
        },
        deleteUsers(state,action){
            return state = [];
        },
    },
});

console.log(userSlice.actions);

export default userSlice.reducer;
export const {addUser,removeUser ,deleteUsers} = userSlice.actions;

