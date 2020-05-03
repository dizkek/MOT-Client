import React from 'react';
import Button from '../components/Button';
import { COLOR } from '../constants/style';
import styles from './components.module.css';

const FinanceAdminMenu = ({ isCreating, setIsCreating }) => {
  return (
    <div className={styles.FinanceButtonBox}>
      <Button onClickHandler={() => setIsCreating(!isCreating)}>
        {!isCreating ? 'New' : 'Back'}
      </Button>
      {!isCreating && (
        <Button style={{ backgroundColor: COLOR.navy }}>
          Delete
        </Button>
      )}
    </div>
  );
};

export default FinanceAdminMenu;
