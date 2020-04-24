import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContainer from './AuthContainer';
import TeamsContainer from './TeamsContainer';
import MyTeamContainer from './MyTeamContainer';

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.render);
  const { teams } = useSelector((state) => state.user);
  const chekPermission = (match) => {
    const { teamname } = match.params;
    return teams.some((team) => team.name === teamname);
  };

  return (
    <Switch>
      <Route 
        path="/teams" 
        render={(props) => 
          isLoggedIn ? (
            <TeamsContainer {...props} />
          ) : (
            <Redirect to={{ pathname: "/" }} />
          )
        }
      />
      <Route 
        path="/myteam/:teamname"
        render={({ match }) => {
          if (isLoggedIn) {
            const isValid = chekPermission(match);
            return isValid ? (
              <MyTeamContainer match={match} /> 
            ) : (
              <Redirect to={{ pathname: "/teams" }} />
            );
          }
          
          return <Redirect to={{ pathname: "/" }} />;
        }}
      />
      <Route path="/" component={AuthContainer} />
    </Switch>
  );
}

export default App;
