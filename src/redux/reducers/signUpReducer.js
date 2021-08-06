//SignUpReducer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    status: '',
    email: '',
    message: '',
    uid: null
}

const SignUpSlice = createSlice({

    name: 'SignUp',
    initialState,
    reducers: {
        clearSignUp(state) {
            Object.assign(state, {
                loading: false,
                status: '',
                email: '',
                message: '',
                uid: null
            })
        },
        //SignUpentication status
        signUp(state, action) {
            state.loading = true;
        },
        signUpSuccess(state, action) {
            state.loading = false
            state.status = action.payload.status
            state.email = action.payload.email
            state.message = 'Success'
            state.uid = action.payload.uid
        },
        signUpFailure(state, action) {
            state.loading = false
            state.status = 'fail'
            state.email = ''
            state.uid = null
            state.message = action.payload.message
        },
    }
});

export const {

    clearSignUp,
    signUp,
    signUpSuccess,
    signUpFailure

} = SignUpSlice.actions;

export default SignUpSlice.reducer
