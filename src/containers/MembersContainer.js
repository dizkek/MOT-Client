import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendInvitaion } from '../thunks';
import Members from '../components/Members';
import { fetchMembersData } from '../actions';

const MembersContainer = ({ id, teamname }) => {
  const dispatch = useDispatch();
  const { members } = useSelector((state) => state.team);

  const onClickSendInvitation = (data) => {
    dispatch(sendInvitaion(data));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = window.localStorage.getItem('token');
        const response = await fetch(
          `${process.env.REACT_APP_API}/teams/myteam/${id}/members`, 
          {
            method: 'GET',
            headers: { 
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
        });
        
        const { result, members } = await response.json();
        if (result !== 'ok') throw Error();
        dispatch(fetchMembersData(members));
      } catch (e){
        alert('데이터를 가져오는데 실패했습니다. 리프레시를 해주세요');
      }
    };

    fetchData();
  }, []);

  return (
    <Members 
      members={members} 
      id={id} 
      onClickSendInvitation={onClickSendInvitation} 
      teamname={teamname}
    />
  );
};

export default MembersContainer;
