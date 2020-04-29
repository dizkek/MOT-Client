import { 
  FETCH_USER_DATA,
  ADD_TEAM,
  LOG_OUT,
  ADD_NOTICE_REQUEST,
  FETCH_TEAM_DATA,
  FETCH_MEMBERS_DATA,
  SAVE_FORMATION,
  UPDATE_FORMATION,
} from '../constants';

export const fetchUserData = (user) => ({ type: FETCH_USER_DATA, user });
export const addTeam = (team) => ({ type: ADD_TEAM, team });
export const addNotice = (notice) => ({ type: ADD_NOTICE_REQUEST, notice });
export const getTeamData = (team) => ({ type: FETCH_TEAM_DATA, team });
export const proceedLogOut = () => ({ type: LOG_OUT });
export const fetchMembersData = (members) => ({ type: FETCH_MEMBERS_DATA, members });
export const saveFormation = (data) => ({ type: SAVE_FORMATION, data });
export const updateFormation = (formation) => ({ type: UPDATE_FORMATION, formation });
