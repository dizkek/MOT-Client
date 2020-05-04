import { byIdObjCreator } from '../lib/reducerHelper';
import { 
  FETCH_COMMENTS, 
  ADD_COMMENT, 
  DELETE_COMMENT, 
  LOG_OUT,
} from '../constants';

const initialState = {
  byId: {},
  allIds: [],
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      const { comments } = action;
      return {
        ...state,
        byId: byIdObjCreator(comments),
        allIds: comments.map((comment) => comment._id),
      };
    case ADD_COMMENT:
      const { comment } = action;
      return {
        ...state,
        byId: {
          ...state.byId,
          [comment._id]: comment,
        },
        allIds: [...state.allIds, comment._id],
      };
    case DELETE_COMMENT:
      const { commentId } = action.data;
      return {
        ...state,
        allIds: state.allIds.filter((id) => id !== commentId),
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

export default comments;
