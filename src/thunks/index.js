import { 
  SING_UP_REQUEST, 
  LOADING_OFF, 
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  TEAM_ADD_REQUEST,
  LOADING_ON,
} from '../constants';

import { 
  fetchUserData, 
  addTeam, 
  addNotice, 
  fetchMembersData, 
  getTeamData,
  saveFormation,
  updateFormation,
  addPost,
  fetchForumData,
  updateLikes,
  updatePost,
  deletePost,
  fetchCommnets,
  addComment,
  deleteComment,
  saveMatch,
  fetchMatch,
} from '../actions';

export const requestLogIn = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: LOG_IN_REQUEST });
    const response = await fetch(
      `${process.env.REACT_APP_API}/auth/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
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
  } catch (error) {
    dispatch({ type: LOG_IN_FAILURE });
    return alert('서버가 혼잡합니다. 다시 시도해주세요');
  }
};

export const requestSignUp = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: SING_UP_REQUEST });
    const response = await fetch(`
      ${process.env.REACT_APP_API}/auth/signup`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    dispatch({ type: LOADING_OFF });
    
    if (res.result === 'duplicated') {
      return alert('중복된 이메일입니다.');
    } else if (res.result === 'ok') {
      history.push("/");
      return alert('회원가입에 성공했습니다.');
    }

    throw new Error();
  } catch (error) {
    dispatch({ type: LOADING_OFF });
    alert('서버가 혼잡합니다. 다시 시도해주세요');
  }
};

export const registerTeam = (data, history) => async (dispatch) => {
  try {
    const { token } = data;
    dispatch({ type: TEAM_ADD_REQUEST });
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/newteam`,
      {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    dispatch({ type: LOADING_OFF });
    
    if (res.result === 'duplicated') {
      return alert('이미 존재하고 있는 팀이름입니다.');
    } else if (res.result === 'ok') {
      dispatch(addTeam(res.team));
      history.push("/teams");
      return alert('팀이 추가되었습니다.');
    }
    
    throw new Error();
  } catch (error) {
    alert('서버가 혼잡합니다. 다시 시도해주세요');
  }
};

export const requestAddNotice = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_ON });
    const { token, id } = data;
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${id}/notice`,
      {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const { result } = await response.json();
    if (result !== 'ok') {
      throw Error();
    }

    dispatch(addNotice(data.notice));
    dispatch({ type: LOADING_OFF });
  } catch (error) {
    alert('서버가 혼잡합니다. 다시 시도해주세요');
  }
};

export const requestMembersData = (id) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${id}/members`, 
      {
        method: 'GET',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    const { result, members } = await response.json();
    if (result !== 'ok') throw Error();
    dispatch(fetchMembersData(members));
  } catch (error) {
    alert('데이터를 가져오는데 실패했습니다. 리프레시를 해주세요');
  }
};

export const requestTeamData = (id) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${id}`,
      {
        method: 'GET',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    const { result, team } = await response.json();
    if (result !== 'ok') throw Error();
    dispatch(getTeamData(team));
  } catch (error) {
    alert('데이터를 가져오는데 실패했습니다. 리프레시를 해주세요');
  }
};

export const requestSaveFormation = (data, id, history) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_ON });
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${id}/formation`,
      {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const { result } = await response.json();
    dispatch({ type: LOADING_OFF });
    dispatch(saveFormation(data));
    if (result !== 'ok') throw Error();
    history.push('/teams/myteam/바코/formation');
    alert('포메이션 저장이 완료되었습니다.');
  } catch (error) {
    alert('포메이션 저장이 실패했습니다. 다시 시도해 주세요');
  }
};

export const requestFormationData = (teamId) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${teamId}/formation`,
      {
        method: 'GET',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const { result, formation } = await response.json();
    if (result !== 'ok') throw Error();
    dispatch(updateFormation(formation));
  } catch (error) {
    alert('포메이션 데이터 가져오기가 실패했습니다.');
  }
};

export const requestAddPost = (data) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${data.teamId}/posts`,
      {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const { result, newPost } = await response.json();
    if (result !== 'ok') throw Error();
    dispatch(addPost(newPost));
  } catch (error) {
    alert('새글 작성이 실패했습니다. 다시작성해주세요');
  }
};

export const requestForumData = (teamId) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${teamId}/posts`,
      {
        method: 'GET',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const { result, forum, comments } = await response.json();
    if (result !== 'ok') throw Error();
    dispatch(fetchCommnets(comments));
    dispatch(fetchForumData(forum));
  } catch (error) {
    alert('포럼 데이터 가져오기가 실패했습니다.');
  }
};

export const sendLikeRequest = (teamId, postId, userId) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${teamId}/posts/${postId}/like`,
      {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      }
    );
    const { result, likes } = await response.json();
    if (result !== 'ok') throw Error();
    const data = { likes, postId }
    dispatch(updateLikes(data));
  } catch (error) {
    alert('좋아요 요청이 실패했습니다. 다시 시도해 주세요.');
  }
};

export const requestModifyPost = (data) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${data.teamId}/posts/${data.id}`,
      {
        method: 'PUT',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const { result } = await response.json();
    if (result !== 'ok') throw Error();
    dispatch(updatePost(data));
  } catch (error) {
    alert('수정에 실패했습니다. 다시 시도해 주세요.');
  }
};

export const requestDeletePost = (data) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${data.teamId}/posts/${data.id}`,
      {
        method: 'DELETE',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const { result } = await response.json();
    if (result !== 'ok') throw Error();
    dispatch(deletePost(data.id));
  } catch (error) {
    alert('삭제에 실패했습니다. 다시 시도해 주세요.');
  }
};

export const requestAddComment = (data) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/posts/${data.postId}/comment`,
      {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const { result, comment } = await response.json();
    if (result !== 'ok') throw Error();
    dispatch(addComment(comment));
  } catch (error) {
    alert('등록에 실패했습니다. 다시 시도해 주세요.');
  }
};

export const requestDeleteComment = (commentId, postId) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/posts/${postId}/comment/${commentId}`,
      {
        method: 'DELETE',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const { result } = await response.json();
    if (result !== 'ok') throw Error();
    const data = {
      commentId,
      postId
    };
    
    dispatch(deleteComment(data));
  } catch (error) {
    alert('삭제에 실패했습니다. 다시 시도해 주세요.');
  }
};

export const requestMatchData = (teamId) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${teamId}/match`,
      {
        method: 'GET',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const { result, match } = await response.json();
    console.log(result, match, '인 리퀘슽 매치데이터');
    dispatch(fetchMatch(match));
    if (result !== 'ok') throw Error();
  } catch (error) {
    alert('매치 정보를 가져오기가 실패했습니다. 리프레시 해주세요');
  }
};

export const requestSaveMatch = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_ON });
    const { match, teamId } = data;
    const token = window.localStorage.getItem('token');
    const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${teamId}/match`,
      {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(match),
      }
    );
    const { result } = await response.json();
    dispatch(saveMatch(match));
    if (result !== 'ok') throw Error();
    dispatch({ type: LOADING_OFF });
  } catch (error) {
    alert('저장이 실패했습니다. 다시 시도해 주세요.');
  }
};
