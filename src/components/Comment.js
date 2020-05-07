import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import styles from './components.module.css';

const Comment = ({ comment, onClickDeleteComment, userId }) => {
  return (
    <div className={styles.CommentBox}>
      <p className={styles.CommentText}>{`${comment.name}: ${comment.content}`}</p>
      {userId === comment.writer && (
        <CloseCircleOutlined
          className='deleteButton'
          style={{ fontSize: '18px' }}  
          onClick={() => onClickDeleteComment(comment._id, comment.postId)}
        />
      )} 
    </div>  
  );
};

export default Comment;
