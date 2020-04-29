import React from 'react';
import styles from './components.module.css';
import halfField from '../images/half field.png';

const Formation = ({ formation }) => {
  return (
    <>
      <div className={styles.FieldBox} >
        <div style={{ position: 'relative' }}>
          <img src={halfField} className={styles.FieldImg} alt="halfField"/>  
        </div>
      </div>
      <div className={styles.PlayersBox}>
        {formation.map((player) => (
          <span 
            key={player.innerText} 
            style={{ 
              position: 'absolute', 
              marginLeft: player.marginLeft, 
              marginTop: player.marginTop 
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
