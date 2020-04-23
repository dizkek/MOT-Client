import { 
  DISPLAY_SIGN_UP, 
  CLOSE_SIGN_UP, 
  FETCH_USER_DATA,
} from '../constants';

export const renderSingUp = () => ({ type: DISPLAY_SIGN_UP });
export const closeSingUp = ()=> ({ type: CLOSE_SIGN_UP });
export const fetchUserData = (user) => {
  return { type: FETCH_USER_DATA, user};
};
