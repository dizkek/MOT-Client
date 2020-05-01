import { 
  FETCH_TEAM_DATA,
  FETCH_FORUM_DATA,
  ADD_POST,
  UPDATE_LIKES,
  UPDATE_POST,
  DELETE_POST,
} from '../constants';

const initialState = {
  byId: {},
  allId: [],
};

const byIdObj = (entity) => {
  return entity.reduce((acc, current) => {
    acc[current._id] = current;
    return acc;
  }, {});;
};

const forum = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TEAM_DATA:
      const { forum } = action.team;
      return {
        byId: byIdObj(forum),
        allIds: forum.map((forum) => forum._id).reverse(),
      };
    case FETCH_FORUM_DATA:
      const fetChedForum = action.forum;
      return {
        ...state,
        byId: byIdObj(fetChedForum),
          allIds: fetChedForum.map((forum) => forum._id).reverse(),
      };
    case ADD_POST:
      const { _id } = action.post;
      return {
        byId: {
          ...state.byId,
          [_id]: action.post,
        },
        allIds: [_id, ...state.allIds, ],
      };
    case UPDATE_POST:
      const { id, content } = action.data;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            content,
          }
        }
      };
    case DELETE_POST:
      return {
        ...state,
        allIds: state.allIds.filter((id) => id !== action.postId ),
      };
    case UPDATE_LIKES:
      const { likes, postId } = action.data;
      return {
        ...state,
        byId: {
          ...state.byId,
          [postId]: {
            ...state.byId[postId],
            likes,
          }
        }
      };
    default:
      return {
        ...state,
      };
  }
};

export default forum;
