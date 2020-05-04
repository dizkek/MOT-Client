import React, { useState } from 'react';
import Button from './Button';
import Post from '../components/Post';
import { COLOR } from '../constants/style'
import { PROFILE } from '../constants/imageURL';
import styles from './components.module.css';

const Forum = ({ 
  onClickAddNewPost,
  teamId,
  userId,
  forum,
  name,
  onClickLikePost,
  onClickModifyPost,
  onClickDeletePost
}) => {
  const [post, setPost] = useState('');

  const data = {
    post: {
      name,
      content: post,
      date: new Date().toLocaleString(),
      poster: userId,
    },
    teamId,
  };

  return (
    <main className={styles.Main}>
      <div className={styles.ForumContainer}>
        <div className={styles.PostBox}>
          <img src={PROFILE} alt={PROFILE} />
          <input
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Create Post"
          />
          <Button
            type="submit"
            style={{
              padding: '5px', 
              fontSize: 15, 
              margin: 0, 
              backgroundColor: COLOR.navy,
            }}
            onClickHandler={() => {
              onClickAddNewPost(data);
              setPost('');
            }}
          >
            Post
          </Button>
        </div>
        {forum.allIds.map((id) => (
          <Post
            key={id}
            post={forum.byId[id]}
            teamId={teamId}
            userId={userId}
            onClickLikePost={onClickLikePost}
            onClickModifyPost={onClickModifyPost}
            onClickDeletePost={onClickDeletePost}
            onClickAddNewPost={onClickAddNewPost}
          />
        ))} 
      </div>
    </main>
  );
};

export default Forum;
