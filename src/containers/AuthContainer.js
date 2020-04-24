import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestSignUp, requestLogIn } from '../thunks';
import { Switch,Route } from "react-router-dom";
import { Spin } from 'antd';
import styles from "./containers.module.css";
import './antd.css';
import loginImage from '../images/login.jpg';
import SignUp from '../components/SignUp';
import LoginForm from '../components/LoginForm';
import { useHistory } from "react-router-dom";

const AuthContainer = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.render);
  let history = useHistory();
  
  const onClickLogIn = (data, history) => {
    dispatch(requestLogIn(data, history));
  };

  const singUp = (data, history) => {
    dispatch(requestSignUp(data, history));
  };

  const onClickRenderSignUp = () => {
    history.push("/signup");
  };

  const onClickCloseSignUp = () => {
    history.push("/");
  };

  return (
    <Switch>
      <div className={styles.LoginContainer}>
        {isLoading && <Spin size="large" className="spinner" />}
        <div className={styles.LoginBox}>
          <img src={loginImage} className={styles.Image} alt="logInImage"/>
          <Route 
            exact 
            path="/"
            render={(props) => (
              <LoginForm 
                {...props} 
                onClickRenderSignUp={onClickRenderSignUp} 
                onClickLogIn={onClickLogIn}
              />
            )}
          />
          <Route 
            path="/signup"
            render={(props) => (
              <SignUp
                {...props}
                onCLickSingUp={singUp}
                onClickCloseSignUp={onClickCloseSignUp}
              />
            )}
          />
        </div>
      </div>
    </Switch>
  );
};

export default AuthContainer;
