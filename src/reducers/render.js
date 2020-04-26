import { 
  LOG_IN_REQUEST, 
  SING_UP_REQUEST, 
  LOADING_OFF,
  LOADING_ON, 
  LOG_IN_SUCCESS,
  TEAM_ADD_REQUEST,
  LOG_OUT,
} from '../constants';

const initialState = {
  isLoading: false,
  isError: false,
  isLoggedIn: false,
};

const render = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_REQUEST:
    case SING_UP_REQUEST:
    case TEAM_ADD_REQUEST:
    case LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
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

export default render;
