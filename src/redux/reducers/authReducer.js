//AuthReducer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
}

const AuthSlice = createSlice({

    name: 'Auth',
    initialState,
    reducers: {
        clearAuth(state) {
            Object.assign(state, {
                email: '',
            })
        },
        //Authentication status
        authStatus(state, action) {
            state.email = action.payload.email;
        },
    }
});

export const {
    authStatus,
    clearAuth,

} = AuthSlice.actions;

export default AuthSlice.reducer
