import React from 'react';
import Match from '../components/Match';
import { useDispatch, useSelector } from 'react-redux';
import { requestSaveMatch } from '../thunks';

const MatchContainer = ({ teamId }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  const { match } = useSelector((state) => state.team);
  const { _id } = useSelector((state) => state.user);
  const { name, admin } = useSelector((state) => state.team)
  const getMatchData = (data) => {
    dispatch(requestSaveMatch(data));
  };

  return (
    <Match 
      getMatchData={getMatchData} 
      teamId={teamId} 
      match={match} 
      teamName={name} 
      userId={_id} 
      admin={admin} 
      isLoading={isLoading}
    />
  );
};

export default MatchContainer;
