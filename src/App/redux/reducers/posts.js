import { SET_POST } from '../actions/posts';

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return { ...state, posts: action.posts };
    default:
      return state;
  }
};
