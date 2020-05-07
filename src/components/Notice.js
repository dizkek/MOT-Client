import React, { useState } from 'react';
import Button from './Button';
import debounce from 'lodash/debounce';
import { COLOR } from '../constants/style';
import styles from './components.module.css';

const Notice = ({ 
  user, 
  admin, 
  notices, 
  onClickAddNotice, 
  teamname, 
  teamId,
}) => {
  const [notice, setNotice] = useState('');

  const submit = () => {
    const token = window.localStorage.getItem('token');
    const data = {
      notice: {
        content: notice,
        date: new Date().toLocaleString(),
      },
      teamname,
      token,
      teamId,
    };

    onClickAddNotice(data);
    setNotice('');
  };

  const debouncedSubmit = debounce(submit, 700);

  return (
    <main className={styles.Main}>
      <div className={styles.NoticeContainer}>
        {user._id === admin && (
          <div className={styles.PostBox}> 
            <textarea
              value={notice}
              onChange={(e) => setNotice(e.target.value)}
              placeholder="Write a new notice?" 
            />
            <Button
              type="submit"
              style={{
                padding: '5px', 
                fontSize: 15, 
                margin: 0, 
                backgroundColor: COLOR.navy 
              }}
              onClickHandler={debouncedSubmit}
            >
              Post
            </Button>
          </div>
        )}
        <span>Notice</span>
        {notices.length > 0 && 
          notices
            .slice(0)
            .reverse()
            .map((notice, i) => (
              <div className={styles.NoticeBox} key={notice + i}>
                <div className={styles.NoticeTextBox}>{notice.content}</div>
                <div className={styles.TimeBox}>{notice.date.slice(0, 11)}</div>
              </div>
            ))}
      </div>
    </main>
  );
};

export default Notice;
