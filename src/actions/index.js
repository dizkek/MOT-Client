import { 
  FETCH_USER_DATA,
  ADD_TEAM,
  LOG_OUT,
} from '../constants';

export const fetchUserData = (user) => {
  return { type: FETCH_USER_DATA, user};
};

export const addTeam = (team) => {
  return { type: ADD_TEAM, team };
};

export const proceedLogOut = () => ({ type: LOG_OUT });
