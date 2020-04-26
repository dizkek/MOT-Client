import { FETCH_TEAM_DATA, ADD_NOTICE_REQUEST, FETCH_MEMBERS_DATA, LOG_OUT  } from '../constants';

const initialState = {
  name: null,
  members: [],
  formation: [],
  forum: [],
  finance: [],
  notices: [],
  admin: null,
  _id: null,
};

const team = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TEAM_DATA:
      return {
        ...action.team,
      };
    case ADD_NOTICE_REQUEST:
      return {
        ...state,
        notices: [...state.notices, action.notice],
      }
    case FETCH_MEMBERS_DATA:
      return {
        ...state,
        members: action.members,
      }
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

export default team;
