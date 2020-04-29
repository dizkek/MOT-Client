import { 
  FETCH_TEAM_DATA, 
  ADD_NOTICE_REQUEST, 
  FETCH_MEMBERS_DATA, 
  LOG_OUT, 
  SAVE_FORMATION,
  UPDATE_FORMATION,  
} from '../constants';

const initialState = {
  name: null,
  members: {},
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
      let { members } = action.team;
      let membersObj = members.reduce((acc, current) => {
        acc[current._id] = current;
        return acc;
      }, {});

      return {
        ...action.team,
        members: {
          byId: membersObj,
          allIds: members.map((member) => member._id),
        },
      };
    case ADD_NOTICE_REQUEST:
      return {
        ...state,
        notices: [...state.notices, action.notice],
      };
    case FETCH_MEMBERS_DATA:
      const updaTedMembers = action.members;
      const updaTedMembersObj = updaTedMembers.reduce((acc, current) => {
        acc[current._id] = current;
        return acc;
      }, {});

      return {
        ...state,
        members: {
          byId: updaTedMembersObj,
          allIds: updaTedMembers.map((member) => member._id),
        },
      };
    case SAVE_FORMATION:
      return {
        ...state,
        formation: action.data,
      };
    case UPDATE_FORMATION:
      return {
        ...state,
        formation: action.formation,
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

export default team;
