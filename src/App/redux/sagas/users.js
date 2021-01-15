import { takeEvery, put } from 'redux-saga/effects';
import { FETCH_USER, setUser } from '../actions/users';
import { fetchApiUserById } from '../../commons/api';

function* fetchUsersAsync({ id }) {
  const user = yield fetchApiUserById(id);
  yield put(setUser(user));
}
export function* watchFetchUsersAsync() {
  yield takeEvery(FETCH_USER, fetchUsersAsync);
}
