import React from 'react';
import Button from './Button';
import styles from './components.module.css';

const Join =({ match, onClickJoin }) => {
  const { token, team_id } = match.params;

  const joinTeam = () => {
    const data = {
      token,
      team_id,
    };

    onClickJoin(data);
  };

  return (
    <div className={styles.JoinContainer}>
      <div className={styles.JoinBox}>
        <h1> Click the button </h1>
        <Button onClickHandler={joinTeam} style={{ margin: 0 }}>JOIN</Button>
      </div>
    </div>
  );
};

export default Join;
