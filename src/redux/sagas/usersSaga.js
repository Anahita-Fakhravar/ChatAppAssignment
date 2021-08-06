import { all, put, takeLatest, call } from 'redux-saga/effects';
import {
    users,
    usersSuccess,
    usersFailure
} from './../reducers/usersReducer';
import firebase from '../../firebase/config';

const usersSaga = function* (action) {
  
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
                userList: result.user
            }, type: usersSuccess.type,
        });

    } catch (error) {

        yield put({
            payload: {
                message: error.code,
            }, type: usersFailure.type,
        });

    }



};

export function* usersCallApiWatcher() {

    yield all([
        yield takeLatest(users.type, usersSaga),
    ]);

};
