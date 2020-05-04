import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notice from '../components/Notice';
import { requestAddNotice, requestTeamData } from '../thunks';

const NoticeContainer = ({ teamname, teamId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  const { notices, admin } = useSelector(state => state.team);

  const onClickAddNotice = (data) => {
    dispatch(requestAddNotice(data));
  };

  useEffect(() => {
    const fetchData = async(id) => {
      dispatch(requestTeamData(id));
    };

    fetchData(teamId);
  }, []);

  return(
    <Notice
      teamId={teamId}
      user={user}
      admin={admin}
      notices={notices}
      onClickAddNotice={onClickAddNotice}
      teamname={teamname}
    />
  );
};

export default NoticeContainer;
