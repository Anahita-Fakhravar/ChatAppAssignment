import { all, put, takeLatest, call } from 'redux-saga/effects';
import {
    signUp,
    signUpSuccess,
    signUpFailure
} from './../reducers/signUpReducer';
import firebase from '../../firebase/config';


const signUpSaga = function* (action) {

    const auth = firebase.auth()
    try {
        const result = yield call(
            [auth, auth.signInWithEmailAndPassword],
            action.payload.email,
            action.payload.password
        )
        yield put({
            payload: {
                status: 'success',
                email: result.user.email,
                uid: result.user.uid
            }, type: signUpSuccess.type,
        });
    } catch (error) {

        if (error.code === 'auth/user-not-found') {

            try {
                const result = yield call(
                    [auth, auth.createUserWithEmailAndPassword],
                    action.payload.email,
                    action.payload.password
                )
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
        } else {

            yield put({
                payload: {
                    message: error.code,
                }, type: signUpFailure.type,
            });
        }
    }



};

export function* signUpCallApiWatcher() {

    yield all([
        yield takeLatest(signUp.type, signUpSaga),
    ]);

};
