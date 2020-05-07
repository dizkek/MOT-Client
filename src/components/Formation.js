import React from 'react';
import halfField from '../images/half field.png';
import { ABSOLUTE, RELATIVE } from '../constants/style';
import styles from './components.module.css';

const Formation = ({ formation = [] }) => {
  return (
    <>
      <div className={styles.FieldBox}>
        <div style={{ position: RELATIVE }}>
          <img src={halfField} className={styles.FieldImg} alt="halfField" />
        </div>
      </div>
      <div className={styles.PlayersBox}>
        {formation.length > 0 &&
          formation.map((player) => (
            <span
              key={player.innerText}
              style={{
                position: ABSOLUTE,
                marginLeft: player.marginLeft,
                marginTop: player.marginTop,
              }}
              className={styles.Player}
            >
              <span>{player.innerText}</span>
            </span>
          ))}
      </div>
    </>
  );
};

export default Formation;
