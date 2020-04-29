import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContainer from './AuthContainer';
import TeamsContainer from './TeamsContainer';
import MyTeamContainer from './MyTeamContainer';
import Join from '../components/Join';

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.render);
  const { teams } = useSelector((state) => state.user);

  const chekPermission = (match) => {
    const { teamname } = match.params;
    return teams.allIds.some((id) => teams.byId[id].name === teamname);
  };

  const onClickJoin = async (data) => {
    try {
      const { token, team_id } = data;
      const response = await fetch(
        `${process.env.REACT_APP_API}/teams/${team_id}/join/${token}`,
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
      if (result === 'was verified') return alert('이미 인증되었습니다.');
      if (result !== 'ok') throw Error(); 
      alert('팀 가입이 완료됐습니다.');
    } catch (error) {
      alert('만료된 링크입니다.');
    }
  };

  return (
    <Switch>
      <Route
        path="/teams/myteam/:teamname"
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
      <Route 
        exact 
        path="/teams/:team_id/join/:token" 
        render={(props) => <Join {...props} onClickJoin={onClickJoin}/>}
      />
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
      <Route path="/" component={AuthContainer} />
    </Switch>
  );
}

export default App;
