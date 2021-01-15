import { spawn } from 'redux-saga/effects';
import { watchFetchUsersAsync } from './sagas/users';
import { watchFetchPostsAsync } from './sagas/posts';

export default function* () {
  yield spawn(watchFetchUsersAsync);
  yield spawn(watchFetchPostsAsync);
}
