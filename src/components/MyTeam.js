import React, { useState } from 'react';
import Alogo from '../images/Alogo.jpg';
import styles from './components.module.css';
import Button from './Button';
import debounce from 'lodash/debounce'

const MyTeam = ({ user, onClickAddNotice, teamname, notices, admin }) => {
  const [notice, setNotice] = useState('');

  const submit = () => {
    const token = window.localStorage.getItem('token');
    const data = {
      notice : {
        content: notice,
        date: new Date().toISOString(),
      },
      teamname,
      token,
    };

    onClickAddNotice(data);
  };

  const debouncedSubmit = debounce(submit, 700);
  
  return (
    <div className={styles.HomeContainer}>
      <header className={styles.Header}>
        <nav className={styles.Nav}>
          <ul className={styles.NavLeft}>
            <li><img style={{ width: '100px'}} src={Alogo} alt="logo" /></li>
            <li><a href={`/myteam/${teamname}`}>Home</a></li>
            <li><a href={`/myteam/${teamname}/dddddd`} >Formation</a></li>
            <li><a href="" >Match</a></li>
            <li><a href="" >Threads</a></li>
            <li><a href="" >Finance</a></li>
            <li><a href="">Members</a></li>
          </ul>
          <ul className={styles.NavRight}>
            <li>Welcome {user.name}</li>
            <li><Button>Log out</Button></li>
          </ul>
        </nav>
      </header>
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
                  backgroundColor: '#232D41' 
                }}
                onClickHandler={debouncedSubmit}
              >
                Post
              </Button>
            </div>
          )}
          <span>Notice</span>
          {notices.slice(0).reverse().map((notice) => 
            <div className={styles.NoticeBox}>{notice.content}</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyTeam;
