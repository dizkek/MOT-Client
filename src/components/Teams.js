import React from 'react';
import styles from './components.module.css';
import './antd.css';
import Button from './Button';
import { COLOR } from '../constants';

const Teams = ({ teams, displayRegisterForm, onClickLogOut }) => {
  return (
    <div className={styles.TeamContainer}>
      <div className={styles.TeamBox}>
        <div>
          <h1 className={styles.TeamListText}>My Team</h1>
          <ul className={styles.TeamUl}>
            {teams.length && teams.map((team) => 
              <li key={team.name}><a href="/main">{team.name}</a></li>
            )}
          </ul>
        </div>
        <div className={styles.TeamButtonBox}>
          <Button 
            onClickHandler={displayRegisterForm} 
            style={{ backgroundColor: COLOR.navy, margin: 0 }}
          >
            Register
          </Button>
          <Button 
            onClickHandler={onClickLogOut} 
            style={{ margin: 0 }}
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Teams;
