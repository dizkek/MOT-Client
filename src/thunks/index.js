import { 
  SING_UP_REQUEST, 
  SING_UP_DUPLICATED, 
  SING_UP_SUCCESS, 
  HIDE_SIGN_UP, 
  LOADING_ON, 
  LOADING_OFF, 
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
} from '../constants';

import { fetchUserData } from '../actions';

export const requestLogIn = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOG_IN_REQUEST });
    const response = await fetch(`${process.env.REACT_APP_API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    dispatch({ type: LOADING_OFF });

    if (res.result === 'none') {
      return alert('존재하지 않는 계정입니다.');
    } else if (res.result === 'incorrect password') {
      return alert('잘못된 비밀번호입니다.');
    } else if (res.result === 'error') {
      throw new Error();
    }
    
    const { user, token } = res;
    dispatch({ type: LOG_IN_SUCCESS });
    dispatch(fetchUserData(user));
    window.localStorage.setItem('token', token);
  } catch(e) {
    return alert('서버가 혼잡합니다. 다시 시도해주세요');
  }
};

export const requestSignUp = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_ON });
    dispatch({ type: SING_UP_REQUEST });
    const response = await fetch(`${process.env.REACT_APP_API}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    dispatch({ type: LOADING_OFF });

    if (res.result === 'duplicated') {
      dispatch({ type: SING_UP_DUPLICATED });
      return alert('중복된 이메일입니다.');
    } else if (res.result === 'ok') {
      dispatch({ type: SING_UP_SUCCESS });
      dispatch({ type: HIDE_SIGN_UP });
      return alert('회원가입에 성공했습니다.');
    }

    throw new Error();
  } catch(e) {
    alert('서버가 혼잡합니다. 다시 시도해주세요');
  }
};
