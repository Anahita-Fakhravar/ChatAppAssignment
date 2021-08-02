//AuthReducer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    fullName: '',
}

const AuthSlice = createSlice({

    name: 'Auth',
    initialState,
    reducers: {
        clearAuth(state) {
            Object.assign(state, {
                email: '',
                fullName: '',
            })
        },
        //Authentication status
        authStatus(state, action) {
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
        },
    }
});

export const {
    authStatus,
    clearAuth,

} = AuthSlice.actions;

export default AuthSlice.reducer
