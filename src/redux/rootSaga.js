import * as types from './actionTypes';
import { takeEvery, put, all, delay, fork, call } from 'redux-saga/effects';
import {loadUsersSuccess,loadUsersError} from "./actions"
import { loadUsersApi } from './api';

function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    if (response.data) {
      yield delay(1000);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.message));
  }
}

function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

const userSagas = [
  fork(onLoadUsers),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}

