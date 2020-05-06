import { byIdObjCreator } from '../utils/reducerHelper';
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
      const { newFinances } = action;
      const newAllIds = newFinances
        .sort((a, b) => b.yearAndMonth > a.yearAndMonth ? 1 : -1)
        .map((finance) => finance._id);
      return {
        ...state,
        byId: byIdObjCreator(newFinances),
        allIds: newAllIds,
      };
    case DELETE_FINANCE:
      const byIdObj = state.allIds.length === 1 ? {} : state.byId;
      return {
        ...state,
        byId: byIdObj,
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
