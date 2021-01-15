export const FETCH_POST = 'FETCH_POST';
export const SET_POST = 'SET_POST';

export const fetchPosts = (userId) => ({
  type: FETCH_POST,
  userId,
});

export const setPosts = (posts) => ({
  type: SET_POST,
  posts,
});
