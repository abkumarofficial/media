import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slice/usersSlice";


export const store = configureStore({
    reducer: {
        users: usersReducer,
    }
});