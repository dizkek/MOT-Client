import React from 'react';
import styles from './components.module.css';
import TacticBoard from './TacticBoard';
import BestEleven from './BestEleven';

const Formation = () => {
  return (
    <main className={styles.MainFormation}>
      <BestEleven />
    </main>
  );
};

export default Formation;
