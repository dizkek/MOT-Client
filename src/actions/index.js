import { LOGIN_REQUEST, SING_UP_REQUEST } from '../constants';
import FacebookLogin from 'react-facebook-login';

const asdf = () => {
  return { type: LOGIN_REQUEST };
};

export const requestSignUp = (data) => async(dispatch) => {
};

export const sendLoginRequest = (response) => async (dispatch) => {
  const { name, email, picture } = await response;
};

