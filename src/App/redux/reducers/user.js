import { SET_USER } from '../actions/users';

const initialState = {
  user: null,
  //Fake login
  loginID: '1',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
