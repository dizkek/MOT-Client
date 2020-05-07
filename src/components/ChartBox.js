import React from 'react';
import IncomeOutcomeChart from './IncomeOutcomeChart';
import OutcomeDetailChart from './OutcomeDetailChart';
import Button from '../components/Button';
import styles from './components.module.css';

const ChartBox = ({ financeIndex, setFinanceIndex, finances, data, detailData }) => {
  return (
    <div className={styles.ChartContainer}>
      <div className={styles.ChartBox}>
        <IncomeOutcomeChart
          data={data[0]}
          month={data[1]}
          year={detailData[2]}
        />
        <OutcomeDetailChart
          data={detailData[0]}
          month={detailData[1]}
          year={detailData[2]}
        />
      </div>
      <div className={styles.ChartButtonBox}>
        <div className={styles.ChartPrevBox}>
          {financeIndex + 1 !== finances.allIds.length && (
            <Button
              style={{ marginRight: '20px' }}
              onClickHandler={() => setFinanceIndex((prev => prev + 1))}
            >
              Prev
            </Button>
          )}
        </div>
        <div className={styles.ChartNextBox}>
          {financeIndex > 0 && (
            <Button onClickHandler={() => setFinanceIndex((prev => prev - 1))}>
              Next
            </Button>
          )} 
        </div>   
      </div>
    </div>
  );
};

export default ChartBox;
