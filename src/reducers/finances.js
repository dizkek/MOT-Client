import { byIdObjCreator } from '../lib/reducerHelper';
import { FETCH_FINANCE, ADD_FINANCE, LOG_OUT, DELETE_FINANCE } from '../constants';

const initialState = {
  byId: {},
  allIds: [],
};

const finances = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_FINANCE:
      const { finances } = action;
      const allIds = finances
        .sort((a, b) => b.yearAndMonth > a.yearAndMonth ? 1 : -1)
        .map((finance) => finance._id);
      return {
        ...state,
        byId: byIdObjCreator(finances),
        allIds,
      };
    case ADD_FINANCE:
      const { finance } = action;
      const newFinances = [...state.allIds, finance._id];
      return {
        ...state,
        byId: {
          ...state.byId,
          [finance._id] : finance,
        },
        allIds: newFinances.sort((a, b) => b.yearAndMonth > a.yearAndMonth ? 1 : -1 ),
      };
    case DELETE_FINANCE:
      return {
        ...state,
        allIds: state.allIds.filter((id) => id !==  action.id),
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

export default finances;
