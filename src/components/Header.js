import React, { memo } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import Alogo from '../images/Alogo.jpg';
import styles from './components.module.css';

const Header = memo(({ teamname, name, admin, id }) => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <ul className={styles.NavLeft}>
          <li>
            <img style={{ width: '100px' }} src={Alogo} alt="logo" />
          </li>
          <li>
            <Link to={`/teams/myteam/${teamname}`}>Home</Link>
          </li>
          <li>
            <Link to={`/teams/myteam/${teamname}/formation`}>Formation</Link>
          </li>
          <li>
            <Link to={`/teams/myteam/${teamname}/match`}>Match</Link>
          </li>
          <li>
            <Link to={`/teams/myteam/${teamname}/forum`}>Forum</Link>
          </li>
          <li>
            <Link to="">Finance</Link>
          </li>
          {id === admin && (
            <li>
              <Link to={`/teams/myteam/${teamname}/members`}>Members</Link>
            </li>
          )}
        </ul>
        <ul className={styles.NavRight}>
          <li>Welcome {name}</li>
          <li>
            <Button>Log out</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Header;
