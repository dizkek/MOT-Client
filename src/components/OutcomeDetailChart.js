import React from 'react';
import { Pie } from 'react-chartjs-2';
import styles from './components.module.css';

const OutcomeDetailChart = ({ data, month, year }) => {
  return ( 
    <div className={styles.Chart}>
      <Pie 
        data={data}
        width={400}
        height={400}
        options={{
          title: {
            display: true,
            text: `${year}년 ${month}월 지출내역`,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: 'right',
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                const dataset = data.datasets[tooltipItem.datasetIndex];
                const meta = dataset._meta[Object.keys(dataset._meta)[0]];
                const total = meta.total;
                const currentValue = dataset.data[tooltipItem.index];
                const percentage = parseFloat((currentValue / total * 100).toFixed(1));
                return currentValue + '(' + percentage + '%)';
              },
            },
          },
        }}
      />
    </div>
  );
};

export default OutcomeDetailChart;
