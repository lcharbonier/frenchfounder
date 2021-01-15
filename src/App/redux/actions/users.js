export const SET_USER = 'SET_USER';
export const FETCH_USER = 'FETCH_USER';

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const fetchUser = (id) => ({
  type: FETCH_USER,
  id,
});
