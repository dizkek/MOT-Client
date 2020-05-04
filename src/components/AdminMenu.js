import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './components.module.css';

const AdminMenu = memo(({ match }) => {
  return (
    <div className={styles.AdminMenu}>
      <div>
        <Link to={`${match.path}/besteleven`}>Change</Link>
      </div>
      <div>
        <Link to={match.path}>Current Formation</Link>
      </div>
    </div>
  );
});

export default AdminMenu;
