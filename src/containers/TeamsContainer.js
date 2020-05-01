import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerTeam } from '../thunks';
import Teams from '../components/Teams';
import { useHistory } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { proceedLogOut } from '../actions';
import { Spin } from 'antd';

const TeamContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);
  const { teams } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.loading);
  const history = useHistory();

  const onCLickRegisterTeam = (teamName, email, history) => {
    const token = window.localStorage.getItem('token');
    const data = {
      teamName,
      token,
      email,
    };

    dispatch(registerTeam(data, history));
  };

  const onClickLogOut = () => {
    dispatch(proceedLogOut());
    window.localStorage.removeItem('token');
  };

  const displayRegisterForm = () => {
    history.push("/teams/register");
  };

  return (
    <Switch>
      {isLoading && <Spin size="large" className="spinner" />}
      <Route
        exact
        path="/teams/register"
        render={(props) => (
          <RegisterForm 
            {...props} 
            onCLickRegisterTeam={onCLickRegisterTeam} 
            email={email}
          />
        )}
      />
      <Route
        exact
        path={match.url} 
        render={(props) => (
          <Teams 
            {...props} 
            teams={teams}
            displayRegisterForm={displayRegisterForm}
            onClickLogOut={onClickLogOut}
          />
        )}
      />
      <Route path="*" render={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
  );
};

export default TeamContainer;
