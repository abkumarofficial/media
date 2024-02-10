import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk('users/remove', async (user) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`);
    // const response = await axios.delete(`http://localhost:3005/users/${user.id}`);
    // return response.data;
    // This was working fine for me
    // As I was getting the deleted entry in payload, 
    // but for Stephan it was giving empty object, that's why he commented it
    return user;
});

export { removeUser };