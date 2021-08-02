
/* ***************IMPORTANT************************
This is just to show saga implementation.
In a real project I use it to call multiple 
web services api or when result of one web service 
api has to be used as a input of another one or when
several tasks have to be done sequentially and ...
*/

import { all, put, takeLatest } from 'redux-saga/effects';
import { authStatus } from '../reducers/authReducer';

const authCallApi = function* (action) {

    yield put({
        payload: {
            isLogin: false,
            mobile: '',
            fullName: '',
        }, type: authStatus.type
    })

};

export function* authCallApiWatcher() {

    yield all([
        yield takeLatest(authStatus.type, authCallApi),
    ]);

};
