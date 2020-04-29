import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Members from '../components/Members';
import { requestMembersData } from '../thunks';

const MembersContainer = ({ id, teamname }) => {
  const dispatch = useDispatch();
  const { members } = useSelector((state) => state.team);

  const onClickSendInvitation = async (data) => {
    try {
      const { id, token } = data;
      const response = await fetch(
      `${process.env.REACT_APP_API}/teams/${id}/invitation`,
      {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const { result } = await response.json();
    if (result !== 'ok') throw Error();
    alert('팀 초대 메일 전송이 완료되었습니다.');
    } catch (error) {
      alert('서버가 혼잡합니다. 다시 보내주세요');
    }
  };

  useEffect(() => {
    const fetchData = async (id) => {
      dispatch(requestMembersData(id));
    };
    
    fetchData(id);
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
