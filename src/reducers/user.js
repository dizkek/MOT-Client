import { FETCH_USER_DATA, ADD_TEAM, LOG_OUT } from '../constants';

const initialState = {
  name: null,
  email: null,
  isAdmin: null,
  teams: [],
  password: null,
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_DATA:
      const { user } = action;
      return {
        ...state,
        ...user,
      };
    case ADD_TEAM:
      return {
        ...state,
        teams: [...state.teams, action.team],
      };
    case LOG_OUT:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};

export default user;
