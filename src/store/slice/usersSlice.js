import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const UsersSlice = createSlice({
    name: "users",
    initialState: {
        isLoading: true, // We are no longer using them now in our component
        data: [],
        error: null, // We are no longer using them now in our component
    },
    reducers: {},
    extraReducers(builder) {
        // FetchUsers
        builder.addCase(fetchUsers.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        // AddUsers
        builder.addCase(addUser.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        // RemoveUsers
        builder.addCase(removeUser.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.isLoading = false;
            // console.log('action', action.payload);
            state.data = state.data.filter(user => {
                return user.id !== action.payload.id
            })
        });
        builder.addCase(removeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const usersReducer = UsersSlice.reducer;