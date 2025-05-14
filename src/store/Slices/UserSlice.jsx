import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: [],
    reducers:{
        // micro reducers
        addUser(state,action){},
        removeUser(state,action){},
        deleteUsers(state,action){},
    },
});
export {userSlice};

