import { byIdObjCreator } from '../utils/reducerHelper';
import { 
  FETCH_TEAM_DATA, 
  ADD_NOTICE_REQUEST, 
  FETCH_MEMBERS_DATA, 
  LOG_OUT, 
  SAVE_FORMATION,
  UPDATE_FORMATION,
  FETCH_FORUM_DATA,
  SAVE_MATCH,
  FETCH_MATCH,
} from '../constants';

const initialState = {
  name: null,
  members: {},
  formation: [],
  forum: {
    byId: {},
    allIds: [],
  },
  finances: [],
  notices: [],
  admin: null,
  _id: null,
  match: [],
};

const team = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAM_DATA:
      const { members, forum } = action.team;
      return {
        ...action.team,
        members: {
          byId: byIdObjCreator(members),
          allIds: members.map((member) => member._id),
        },
        forum: forum.map((forum) => forum._id).reverse(),
      };
    case ADD_NOTICE_REQUEST:
      return {
        ...state,
        notices: [...state.notices, action.notice],
      };
    case FETCH_MEMBERS_DATA:
      const fetchedMembers = action.members;
      return {
        ...state,
        members: {
          byId: byIdObjCreator(fetchedMembers),
          allIds: fetchedMembers.map((member) => member._id),
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
    case FETCH_FORUM_DATA:
      const fetChedForum = action.forum;
      return {
        ...state,
        forum: fetChedForum.map((forum) => forum._id).reverse(),
      };
    case FETCH_MATCH:
      return {
        ...state,
        match: action.match,
      };
    case SAVE_MATCH:
      return {
        ...state,
        match: [action.match],
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
