import React from 'react';
import styles from './components.module.css';
import './antd.css';
import Button from './Button';
import { COLOR } from '../constants';
import { Link } from 'react-router-dom';

const Teams = ({ teams, displayRegisterForm, onClickLogOut }) => {
  return (
    <div className={styles.TeamContainer}>
      <div className={styles.TeamBox}>
        <div>
          <h1 className={styles.TeamListText}>My Team</h1>
          <ul className={styles.TeamUl}>
            {teams.length > 0 && teams.map((team) => (
              <li key={team.name}>
                <Link to={`/teams/myteam/${team.name}`}>{team.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.TeamButtonBox}>
          <Button 
            onClickHandler={() => displayRegisterForm()} 
            style={{ backgroundColor: COLOR.navy, margin: 0 }}
          >
            Register
          </Button>
          <Button onClickHandler={onClickLogOut} style={{ margin: 0 }}>
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Teams;
