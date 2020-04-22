import { LOGIN_REQUEST } from '../constants';

const initialState = {
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  isFetching: false,
};

const render = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default render;
