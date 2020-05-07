import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Finance from '../components/Finance';
import debounce from 'lodash/debounce';
import { incomeOutcomeData, outcomeDetail } from '../utils/data';
import { requestAddFinance, requestDeleteFinance } from '../thunks';
import { Spin } from 'antd';

const FinanceContainer = ({ teamId }) => {
  const [financeIndex, setFinanceIndex] = useState(0);
  const [pideData, setPieData] = useState([]);
  const [pieDetailData, setPieDetailData] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { admin } = useSelector(state => state.team);
  const { finances } = useSelector(state => state);
  const { isLoading } = useSelector((state) => state.loading);

  const addFinanceHelper = (data) => {
    dispatch(requestAddFinance(data))
  };
  
  const onClickAddFinance = debounce(addFinanceHelper, 500);
  
  const onClickDeleteFinance = (teamId, financeId) => {
    dispatch(requestDeleteFinance(teamId, financeId));
  };

  const id =  finances.allIds[financeIndex];

  const getChartData = useCallback (() => {
    if (finances.allIds.length > 0) {
      const finance = finances.byId[id];
      const currentMonth = finance.yearAndMonth.slice(5).replace('0', '');
      const currentYear = finance.yearAndMonth.slice(0, 4);
  
      const getIncomeData = () => {
        incomeOutcomeData.datasets[0].data = [];
        const data = incomeOutcomeData.datasets[0].data;
        data.push(finance.income);
        data.push(finance.outcome);
        return [incomeOutcomeData, currentMonth, currentYear];
      };
  
      const getOutcomeDetail = () => {
        outcomeDetail.datasets[0].data = [];
        const data = outcomeDetail.datasets[0].data;
        data.push(finance.fieldFee);
        data.push(finance.foodFee);
        data.push(finance.equipmentFee);
        data.push(finance.ect);
        return [outcomeDetail, currentMonth, currentYear];
      };
  
      setPieData(getIncomeData())
      setPieDetailData(getOutcomeDetail())
    };
  }, [id, finances.allIds.length, finances.byId]);

  useEffect(() => {
    getChartData();
  }, [getChartData])

  if (isLoading) {
    return (
      <Spin 
        size="large" 
        style={{ position: 'absolute', top: '50%', left: '50%'}} 
      />
    );
  }
  
  return (
    <Finance 
      userId={user._id} 
      admin={admin} 
      onClickAddFinance={onClickAddFinance}
      teamId={teamId}
      finances={finances}
      financeIndex={financeIndex}
      setFinanceIndex={setFinanceIndex}
      data={pideData}
      detailData={pieDetailData}
      onClickDeleteFinance={onClickDeleteFinance}
      financeId={id}
    />
  );
};

export default FinanceContainer;
