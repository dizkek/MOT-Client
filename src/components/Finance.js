import React, { useState } from 'react';
import Button from '../components/Button';
import ChartBox from '../components/ChartBox';
import FinanceAdminMenu from './FinanceAdminMenu';
import { COLOR } from '../constants/style';
import styles from './components.module.css';

const Finance = ({ 
  userId, 
  admin, 
  onClickAddFinance, 
  teamId, 
  finances, 
  financeIndex, 
  setFinanceIndex, 
  data, 
  detailData,
  onClickDeleteFinance,
  financeId,
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [yearAndMonth, setYearAndMonth] = useState('');
  const [income, setIncome] = useState('');
  const [outcome, setOutcome] = useState('');
  const [fieldFee, setFieledFee] = useState('');
  const [foodFee, setFoodFee] = useState('');
  const [equipmentFee, setEquipmentFee] = useState('');
  const [ect, setEct] = useState('');
 
  const onSubmit = (e) => {
    const data = {
      finance: {
        yearAndMonth,
        income,
        outcome,
        fieldFee,
        foodFee,
        equipmentFee,
        ect,
      },
      teamId,
    };
    e.preventDefault();
    onClickAddFinance(data);
    setIsCreating(false)
    setYearAndMonth('');
    setIncome('');
    setOutcome('');
    setFieledFee('');
    setFoodFee('')
    setEquipmentFee('');
    setEct('');
  };
  
  if (!finances.allIds && admin !== userId) {
    return <h1 className={styles.MatchEmptyText}>현재 등록된 내역이 없습니다.</h1>;
  }
  
  return (
    <main className={styles.FinanceMain}>
      <div className={styles.FinanceContainer}>
        {userId === admin && (
          <FinanceAdminMenu
            setFinanceIndex={setFinanceIndex}
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            onClickDeleteFinance={onClickDeleteFinance}
            teamId={teamId}
            financeId={financeId}
          />
        )}
        {isCreating && (
          <div className={styles.FinanceInputBox}>
            <form onSubmit={onSubmit}>
              <div>
                <input
                  className={styles.Input}
                  value={yearAndMonth}
                  type="month" 
                  onChange={(e) => setYearAndMonth(e.target.value)}
                  required
                />
                <input
                  className={styles.Input}
                  value={income}
                  type="number" 
                  placeholder="수입"
                  onChange={(e) => setIncome(e.target.value)}
                  required
                />
                <input
                  className={styles.Input}
                  value={outcome}
                  type="number" 
                  placeholder="지출"
                  onChange={(e) => setOutcome(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  className={styles.Input}
                  value={fieldFee}
                  type="number" 
                  placeholder="경기장대여"
                  onChange={(e) => setFieledFee(e.target.value)}
                  required
                />
                <input
                  className={styles.Input}
                  value={foodFee}
                  type="number" 
                  placeholder="음식"
                  onChange={(e) => setFoodFee(e.target.value)}
                  required
                />
                <input
                  className={styles.Input}
                  value={equipmentFee}
                  type="number" 
                  placeholder="장비"
                  onChange={(e) => setEquipmentFee(e.target.value)}
                  required
                />
                <input
                  className={styles.Input}
                  value={ect}
                  type="number" 
                  placeholder="기타"
                  onChange={(e) => setEct(e.target.value)}
                  required
                />
                <div>
                  {isCreating && (
                    <Button
                      style={{ backgroundColor: COLOR.navy }}
                      type="submit"
                    >
                      Save
                    </Button> 
                  )}
                </div>
              </div>
            </form>
          </div>
        )}
        {finances.allIds.length > 0 && (
          <ChartBox 
            financeIndex={financeIndex} 
            setFinanceIndex={setFinanceIndex} 
            finances={finances}
            data={data}
            detailData={detailData}
          />
        )}
      </div>
    </main>
  );
};

export default Finance;
