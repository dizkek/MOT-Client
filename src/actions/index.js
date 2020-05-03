import { 
  FETCH_USER_DATA,
  ADD_TEAM,
  LOG_OUT,
  ADD_NOTICE_REQUEST,
  FETCH_TEAM_DATA,
  FETCH_MEMBERS_DATA,
  SAVE_FORMATION,
  UPDATE_FORMATION,
  ADD_POST,
  FETCH_FORUM_DATA,
  UPDATE_LIKES,
  UPDATE_POST,
  DELETE_POST,
  FETCH_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  SAVE_MATCH,
  FETCH_MATCH,
} from '../constants';

export const fetchUserData = (user) => ({ type: FETCH_USER_DATA, user });
export const addTeam = (team) => ({ type: ADD_TEAM, team });
export const addNotice = (notice) => ({ type: ADD_NOTICE_REQUEST, notice });
export const getTeamData = (team) => ({ type: FETCH_TEAM_DATA, team });
export const proceedLogOut = () => ({ type: LOG_OUT });
export const fetchMembersData = (members) => ({ type: FETCH_MEMBERS_DATA, members });
export const saveFormation = (data) => ({ type: SAVE_FORMATION, data });
export const updateFormation = (formation) => ({ type: UPDATE_FORMATION, formation });
export const addPost = (post) => ({ type: ADD_POST, post });
export const updatePost = (data) => ({ type: UPDATE_POST, data });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const fetchForumData = (forum) => ({ type: FETCH_FORUM_DATA, forum });
export const updateLikes = (data) => ({ type: UPDATE_LIKES, data });
export const fetchCommnets = (comments) => ({ type: FETCH_COMMENTS, comments });
export const addComment = (comment) => ({ type: ADD_COMMENT, comment });
export const deleteComment = (data) => ({ type: DELETE_COMMENT, data });
export const fetchMatch = (match) => ({ type: FETCH_MATCH, match });
export const saveMatch = (match) => ({ type: SAVE_MATCH, match });
