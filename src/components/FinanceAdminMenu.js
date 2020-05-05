import React from 'react';
import Button from '../components/Button';
import { COLOR } from '../constants/style';
import styles from './components.module.css';

const FinanceAdminMenu = ({ 
  isCreating, 
  setIsCreating, 
  onClickDeleteFinance, 
  teamId, 
  financeId,
  setFinanceIndex,
}) => {
  const proceedDelete = () => {
    onClickDeleteFinance(teamId, financeId);
    setFinanceIndex(0);
  };

  return (
    <div className={styles.FinanceButtonBox}>
      <Button onClickHandler={() => setIsCreating(!isCreating)}>
        {!isCreating ? 'New' : 'Back'}
      </Button>
      {!isCreating && (
        <Button 
          style={{ backgroundColor: COLOR.navy }}
          onClickHandler={() =>
            window.confirm('삭제하시겠습니까?') &&
            proceedDelete()
          }
        >
          Delete
        </Button>
      )}
    </div>
  );
};

export default FinanceAdminMenu;
