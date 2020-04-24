import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerTeam } from '../thunks';
import Teams from '../components/Teams';
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { proceedLogOut } from '../actions';
import { Spin } from 'antd';

const TeamContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);
  const { teams } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.render);
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
    <>
      {isLoading && <Spin size="large" className="spinner" />}
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
      <Route 
        exact 
        path={match.url + "/register"} 
        render={(props) => (
          <RegisterForm 
            {...props} 
            onCLickRegisterTeam={onCLickRegisterTeam} 
            email={email}
          />
        )}
      />
    </>
  );
};

export default TeamContainer;
