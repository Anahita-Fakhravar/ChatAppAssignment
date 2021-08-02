//Saga

import { all } from 'redux-saga/effects';

import { authCallApiWatcher } from './authSaga'

export default function* rootSaga() {
    yield all([
        authCallApiWatcher(),
    ])
}
