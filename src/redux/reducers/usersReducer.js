//UsersReducer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    userList: [],
    message: '',
}

const UsersSlice = createSlice({

    name: 'Users',
    initialState,
    reducers: {
        clearUsers(state) {
            Object.assign(state, {
                loading: false,
                userList: [],
                message: '',
            })
        },
        //users status
        users(state, action) {
            state.loading = true;
        },
        usersSuccess(state, action) {
            state.loading = false
            state.userList = action.payload.userList
            state.message = 'Success'
        },
        usersFailure(state, action) {
            state.loading = false
            state.userList = []
            state.message = 'failed'
        },
    }
});

export const {

    clearUsers,
    users,
    usersSuccess,
    usersFailure

} = UsersSlice.actions;

export default UsersSlice.reducer
