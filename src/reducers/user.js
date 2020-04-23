import { FETCH_USER_DATA } from '../constants';

const initialState = {
  name: null,
  email: null,
  isAdmin: null,
  team: [],
  password: null,
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_DATA:
      return {
        ...action.user,
      };
    default:
      return {
        ...state,
      };
  }
};

export default user;
