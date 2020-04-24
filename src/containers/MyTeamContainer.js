import React, { useEffect } from 'react';
import MyTeam from '../components/MyTeam';
import { useDispatch, useSelector } from 'react-redux';
import { requestAddNotice } from '../thunks';
import { getTeamData } from '../actions';

const MyTeamContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  const { notices, admin } = useSelector(state => state.team);
  const { teamname } = match.params;
  const onClickAddNotice = (data) => {
    dispatch(requestAddNotice(data));
  }

  useEffect(() => {
    console.log('유즈이펙트')
    const { _id } = user.teams.find((team) => team.name === teamname);
    const fetchData = async() => {
      try {
        const token = window.localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_API}/teams/${_id}`, {
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

  return (
    <MyTeam 
      user={user}
      admin={admin}
      teamname={teamname} 
      onClickAddNotice={onClickAddNotice}
      notices={notices}
    />
  );
};

export default MyTeamContainer;
