import { pathOr } from 'ramda';

export const getUser = (state) => pathOr(null, ['userReducer', 'user'], state);
export const getLoginID = (state) =>
  pathOr(null, ['userReducer', 'loginID'], state);
export const getPosts = (state) => pathOr([], ['postReducer', 'posts'], state);
