import { all, put, takeLatest, call } from 'redux-saga/effects';
import {
    signUp,
    signUpSuccess,
    signUpFailure
} from './../reducers/authReducer';
import firebase from '../../firebase/config';


const authSaga = function* (action) {
    console.warn('test saga ana -1', action.payload)

    try {
        const auth = firebase.auth()
        const result = yield call(
            [auth, auth.createUserWithEmailAndPassword],
            action.payload.email,
            action.payload.password
        )
        console.log('result saga ana', result.user.uid)
        yield put({
            payload: {
                status: 'success',
                email: result.user.email,
                uid: result.user.uid
            }, type: signUpSuccess.type,
        });

    } catch (error) {

        yield put({
            payload: {
                message: error.code,
            }, type: signUpFailure.type,
        });

    }



};

export function* authCallApiWatcher() {

    yield all([
        yield takeLatest(signUp.type, authSaga),
    ]);

};
