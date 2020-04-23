import { 
  LOG_IN_REQUEST, 
  SING_UP_REQUEST, 
  SING_UP_DUPLICATED, 
  SING_UP_SUCCESS, 
  DISPLAY_SIGN_UP, 
  HIDE_SIGN_UP, 
  CLOSE_SIGN_UP, 
  LOADING_ON, 
  LOADING_OFF, 
  LOG_IN_SUCCESS 
} from '../constants';

const initialState = {
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  isFetching: false,
  isSigning: false,
};

const render = (state = initialState, action) => {
  switch(action.type) {
    case SING_UP_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case SING_UP_DUPLICATED:
    case SING_UP_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case DISPLAY_SIGN_UP:
      return {
        ...state,
        isSigning: true,
      };
    case HIDE_SIGN_UP:
    case CLOSE_SIGN_UP:
      return {
        ...state,
        isSigning: false,
      };
    case LOADING_ON:
    case LOG_IN_REQUEST:
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
      }
    default:
      return {
        ...state,
      };
  }
};

export default render;
