import { createSlice } from '@reduxjs/toolkit';
import { userReducers } from './reducers';
import { initState } from './state';

const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: userReducers,
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
