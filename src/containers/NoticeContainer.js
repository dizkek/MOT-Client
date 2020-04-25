import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestAddNotice } from '../thunks';
import { getTeamData } from '../actions';
import Notice from '../components/Notice';

const NoticeContainer = ({ teamname, id }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  const { notices, admin } = useSelector(state => state.team);
  const onClickAddNotice = (data) => {
    dispatch(requestAddNotice(data));
  };

  useEffect(() => {
    const fetchData = async() => {
      try {
        const token = window.localStorage.getItem('token');
        const response = await fetch(
          `${process.env.REACT_APP_API}/teams/myteam/${id}`,
          {
            method: 'GET',
            headers: { 
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
        });
        
        const { result, team } = await response.json();
        if (result !== 'ok') throw Error();
        dispatch(getTeamData(team));
      } catch (e){
        alert('데이터를 가져오는데 실패했습니다. 리프레시를 해주세요');
      }
    };

    fetchData();
  }, []);

  return(
    <Notice
      id={id}
      user={user}
      admin={admin}
      notices={notices}
      onClickAddNotice={onClickAddNotice}
      teamname={teamname}
    />
  );
};

export default NoticeContainer;
