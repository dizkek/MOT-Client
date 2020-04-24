import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";
import AuthContainer from './AuthContainer';
import TeamsContainer from './TeamsContainer';

const App = () => {
  const { isLoggedIn } = useSelector(state => state.render);

  return (
    <Switch>
      <Route path="/teams" 
        render={(props) => (
          isLoggedIn ? <TeamsContainer {...props}/> : <Redirect to={{ pathname: "/" }} />
        )}
      />
      <Route path="/">
        <AuthContainer />
      </Route>
    </Switch>
  );
}

export default App;
