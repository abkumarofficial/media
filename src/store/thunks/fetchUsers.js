import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


// thunk req will automatically dispatch users/fetch/pending or 
// users/fetch/fulfilled or
// users/fetch/rejected
// fetchUsers.pending === users/fetch/pending
// fetchUsers.fulfilled === users/fetch/fulfilled
// fetchUsers.rejected === users/fetch/rejected
const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get("http://localhost:3005/users");
    // Dev Only
    // await pause(1000);

    return response.data;

    // await axios.get("http://localhost:3005/users").then((response) => response.data);
});

// Dev Only
// const pause = (duration) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, duration);
//     })
// }

export { fetchUsers };