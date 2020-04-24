import { FETCH_TEAM_DATA, ADD_NOTICE_REQUEST  } from '../constants';

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
    default:
      return {
        ...state,
      };
  }
};

export default team;
