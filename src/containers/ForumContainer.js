import React, { useEffect } from 'react';
import Forum from '../components/Forum';
import { useDispatch, useSelector } from 'react-redux';
import { requestAddPost, requestForumData, sendLikeRequest, requestModifyPost, requestDeletePost } from '../thunks';
import debounce from 'lodash/debounce';

const ForumContainer = ({ teamId }) => {
  const dispatch = useDispatch();
  const { _id, name } = useSelector((state) => state.user);
  const { forum } = useSelector((state) => state);

  const onClickDeletePost = (data) => {
    dispatch(requestDeletePost(data))
  };

  const onClickModifyPost = (data) => {
    dispatch(requestModifyPost(data))
  };


  const requestNewPost = (data) => {
    dispatch(requestAddPost(data));
  };
  const onClickAddNewPost = debounce(requestNewPost, 200);
  
  const likeRequest = (postId) => {
    dispatch(sendLikeRequest(teamId, postId, _id));
  };

  const onClickLikePost = debounce(likeRequest, 200);

  useEffect(() => {
    const fetchData = async (id) => {
      dispatch(requestForumData(id));
    };
    
    fetchData(teamId);
  }, []);

  return (
    <Forum 
      teamId={teamId}
      onClickAddNewPost={onClickAddNewPost}
      onClickModifyPost={onClickModifyPost} 
      onClickLikePost={onClickLikePost}
      onClickDeletePost={onClickDeletePost}
      userId={_id}
      forum={forum}
      name={name}
    />
  );
};

export default ForumContainer;
