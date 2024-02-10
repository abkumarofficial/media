import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
    },
    reducers: {}
});

export const usersReducer = UsersSlice.reducer;