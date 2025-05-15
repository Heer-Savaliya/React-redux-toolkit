import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: [],
    reducers:{
        // micro reducers
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){},
        deleteUsers(state,action){},
    },
});

console.log(userSlice.actions);

export default userSlice.reducer;
export const {addUser} = userSlice.actions;

