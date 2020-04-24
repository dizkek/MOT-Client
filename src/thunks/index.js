import { 
  SING_UP_REQUEST, 
  LOADING_OFF, 
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  TEAM_ADD_REQUEST,
} from '../constants';

import { fetchUserData, addTeam } from '../actions';

export const requestLogIn = (data, history) => async (dispatch) => {
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
    history.push("/teams")
  } catch(e) {
    return alert('서버가 혼잡합니다. 다시 시도해주세요');
  }
};

export const requestSignUp = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: SING_UP_REQUEST });
    const response = await fetch(`${process.env.REACT_APP_API}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    dispatch({ type: LOADING_OFF });
    
    if (res.result === 'duplicated') {
      return alert('중복된 이메일입니다.');
    } else if (res.result === 'ok') {
      history.push("/");
      return alert('회원가입에 성공했습니다.');
    }

    throw new Error();
  } catch(e) {
    alert('서버가 혼잡합니다. 다시 시도해주세요');
  }
};

export const registerTeam = (data, history) => async (dispatch) => {
  try {
    const { token } = data;
    dispatch({ type: TEAM_ADD_REQUEST });
    const response = await fetch(`${process.env.REACT_APP_API}/teams/newteam`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
 
    if (res.result === 'duplicated') {
      return alert('이미 존재하고 있는 팀이름입니다.');
    } else if (res.result === 'ok') {
      dispatch(addTeam(res.team));
      history.push("/teams");
      return alert('팀이 추가되었습니다.');
    }
    
    throw new Error();
  } catch(e) {
    alert('서버가 혼잡합니다. 다시 시도해주세요');
  }
};
