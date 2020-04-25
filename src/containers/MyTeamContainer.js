import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import NoticeContainer from './NoticeContainer';
import MembersContainers from './MembersContainer';
import { Switch, Route } from 'react-router-dom';
import styles from './containers.module.css';

const MyTeamContainer = ({ match }) => {
  const { user } = useSelector((state) => state);
  const { teamname } = match.params;
  const team = user.teams.find((team) => team.name === teamname);

  return (
    <div className={styles.HomeContainer}>
      <Header teamname={teamname} name={user.name} />
      <Switch>
        <Route
          exact
          path={`/teams/myteam/${teamname}/members`}
          render={(props) => (
            <MembersContainers {...props} id={team._id} teamname={teamname} />
          )}
        />
        <Route
          path={`/teams/myteam/${teamname}`}
          render={(props) => (
            <NoticeContainer {...props} teamname={team.name} id={team._id} />
          )}
        />
      </Switch>
    </div>
  );
};

export default MyTeamContainer;
