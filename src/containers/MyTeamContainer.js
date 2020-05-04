import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import NoticeContainer from './NoticeContainer';
import MembersContainer from './MembersContainer';
import FormationContainer from './FormationContainer';
import ForumContainer from './ForumContainer';
import MatchContainer from './MatchContainer';
import FinanceContainer from './FinanceContainer';
import { proceedLogOut } from '../actions';
import styles from './containers.module.css';

const MyTeamContainer = ({ match }) => {
  const { user } = useSelector((state) => state);
  const { teams } = useSelector((state) => state.user);
  const { admin } = useSelector((state) => state.team);
  const dispatch = useDispatch();
  const { teamname } = match.params;
  const teamId = teams.allIds.find((id) => teams.byId[id].name === teamname);
  const team = teams.byId[teamId];

  const onClickLogOut = () => {
    dispatch(proceedLogOut());
  };

  return (
    <div className={styles.HomeContainer}>
      <Header
        teamname={teamname}
        name={user.name}
        admin={admin}
        id={user._id}
        onClickLogOut={onClickLogOut}
      />
      <Switch>
        <Route
          exact
          path={`/teams/myteam/${teamname}/members`}
          render={(props) =>
            user._id === admin ? (
              <MembersContainer {...props} id={team._id} teamname={teamname} />
            ) : (
              <Redirect to={{ pathname: `/teams/myteam/${teamname}` }} />
            )
          }
        />
        <Route
          path={`/teams/myteam/${teamname}/formation`}
          render={(props) => (
            <FormationContainer {...props} id={teamId} teamname={teamname} />
          )}
        />
        <Route
          path={`/teams/myteam/${teamname}/forum`}
          render={(props) => <ForumContainer {...props} teamId={teamId} />}
        />
        <Route
          path={`/teams/myteam/${teamname}/match`}
          render={(props) => <MatchContainer {...props} teamId={teamId} />}
        />
        <Route
          path={`/teams/myteam/${teamname}/finance`}
          render={(props) => <FinanceContainer {...props} teamId={teamId} />}
        />
        <Route
          path={`/teams/myteam/${teamname}`}
          render={(props) => (
            <NoticeContainer {...props} teamname={team.name} teamId={teamId} />
          )}
        />
      </Switch>
    </div>
  );
};

export default MyTeamContainer;
