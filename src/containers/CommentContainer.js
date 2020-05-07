import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../components/Comment';
import Button from '../components/Button';
import { requestAddComment, requestDeleteComment } from '../thunks';
import debounce from 'lodash/debounce';
import styles from './containers.module.css';

const CommentContainer = ({ isCommenting, postId, post }) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const { name, _id } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state);
  console.log(comments, '코멘트');
  const postComment = () => {
    const data = {
      postId,
      name,
      content: comment,
      userId: _id,
    };

    dispatch(requestAddComment(data));
  };

  const onClickDeleteComment = (commentId, postId) => {
    dispatch(requestDeleteComment(commentId, postId));
  };

  const onClickAddComment = debounce(postComment, 300);

  return (
    <>
      {isCommenting && (
        <input
          className={styles.CommentInput}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write"
        />
      )}
      <Button
        type="submit"
        style={{
          padding: '4px',
          fontSize: 13,
          margin: 5,
        }}
        onClickHandler={onClickAddComment}
      >
        Post
      </Button>
      {post.comments.map((id) => {
        if (comments.allIds.length) {
          return (
            <Comment
              userId={_id}
              key={id}
              comment={comments.byId[id]}
              onClickDeleteComment={onClickDeleteComment}
            />
          );
        }
      })}
    </>
  );
};

export default CommentContainer;
