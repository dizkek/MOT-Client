import { FETCH_USER_DATA, ADD_TEAM, LOG_OUT, LOG_IN_SUCCESS } from '../constants';

const initialState = {
  name: null,
  email: null,
  teams: {},
  password: null,
  isLoggedIn: false,
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_DATA:
      const { teams } = action.user;
      const teamsObj = teams.reduce((acc, current) => {
        acc[current._id] = current;
        return acc;
      }, {});

      return {
        ...state,
        ...action.user,
        teams: {
          byId: teamsObj,
          allIds: teams.map((team) => team._id),
        },
      };
    case ADD_TEAM:
      const { team } = action;
      const { byId, allIds } = state.teams;
      byId[team._id] = team;
      
      return {
        ...state,
        teams: {
          byId,
          allIds: [...allIds, team._id],
        },
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
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
