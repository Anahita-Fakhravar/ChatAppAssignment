//Saga

import { all } from 'redux-saga/effects';

import { signUpCallApiWatcher } from './signUpSaga'

export default function* rootSaga() {
    yield all([
        signUpCallApiWatcher(),
    ])
}
