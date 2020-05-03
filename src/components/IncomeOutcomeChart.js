import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './components.module.css';

const IncomeOutcomeChart = ({ data, month, year }) => {
  return (
    <div className={styles.Chart}>
      <Doughnut 
        data={data}
        width={400}
        height={400}
        options={{
          title: {
            display: true,
            text: `${year}년 ${month}월 수입 지출 내역`,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
};

export default IncomeOutcomeChart;

