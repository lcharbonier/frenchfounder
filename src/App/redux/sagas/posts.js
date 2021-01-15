import { takeEvery, put } from 'redux-saga/effects';
import { FETCH_POST, setPosts } from '../actions/posts';
import { fetchPosts } from '../../commons/api';

function* fetchPostsAsync() {
  const posts = yield fetchPosts();
  yield put(setPosts(posts));
}

export function* watchFetchPostsAsync() {
  yield takeEvery(FETCH_POST, fetchPostsAsync);
}
