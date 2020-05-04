import React, { useState, memo } from 'react';
import CommentContainer from '../containers/CommentContainer';
import { 
  LikeTwoTone, 
  CommentOutlined, 
  DeleteOutlined, 
  EditOutlined, 
  SaveOutlined 
} from '@ant-design/icons';
import styles from './components.module.css';

const Post = memo(({ 
  post, 
  userId, 
  onClickLikePost, 
  onClickModifyPost, 
  teamId, 
  onClickDeletePost,
}) => {
  const [isCommenting, setIsCommenting] = useState('');
  const [isModifying, setIsModifying] = useState(false);
  const [content, setContent] = useState(post.content);
  const isLiked = () => {
    return post.likes.find((id) => id === userId);
  };
  
  const data = {
    content,
    teamId,
    id: post._id,
  };
  
  const proceedModification = (data) => {
    setIsModifying(!isModifying);
    if (content === post.content) return;
    onClickModifyPost(data);
  };

  const cancelModification = () => {
    setIsModifying(!isModifying);
    setContent(post.content);
  };

  return (
    <div className={styles.ThreadBox}>
      <div className={styles.LikeBox}>
        <LikeTwoTone 
          style={{ fontSize: '30px', padding: '10px' }} 
          twoToneColor={!isLiked() ? 1 : 0}
          onClick={() => onClickLikePost(post._id)}
        />
        <div>{post.likes.length}</div>
      </div>
      <div className={styles.ContentBox}>
        <p>{`Posted by ${post.name} ${post.date.slice(5, 11)}`}</p>
        <input
          onChange={(e) => setContent(e.target.value)}
          className={styles.contentInput}
          disabled={!isModifying ? true : false}
          value={content}
        />
        <div className={styles.CommentInputBox}>
          <CommentOutlined 
            style={{ fontSize: '23px', marginRight: '10px' }} 
            onClick={() => setIsCommenting(!isCommenting)}
          />
        </div>
        {userId === post.poster && (
          <div className={styles.EditBox}>
            {isModifying && (
              <SaveOutlined
                style={{ fontSize: '23px', marginRight: '10px' }} 
                onClick={() => {
                  window.confirm('저장하시겠습니까?') 
                    ? proceedModification(data)
                    : cancelModification();
                }}
              />
            )}
            <EditOutlined
              style={{ fontSize: '23px', marginRight: '10px' }} 
              onClick={() => setIsModifying(!isModifying)}
            />
            <DeleteOutlined 
              style={{ fontSize: '23px', marginRight: '10px' }} 
              onClick={() => 
                window.confirm('삭제하시겠습니까?') && onClickDeletePost(data)
              }
            />
          </div>
        )}
        {isCommenting && (
          <CommentContainer
            isCommenting={isCommenting} 
            post={post} 
            postId={post._id}
          />
        )}
      </div>
    </div>
  );
});

export default Post;
