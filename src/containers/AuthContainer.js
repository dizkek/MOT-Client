import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestSignUp, requestLogIn } from '../thunks';
import { Switch, Route } from "react-router-dom";
import { Spin } from 'antd';
import { useHistory } from "react-router-dom";
import SignUp from '../components/SignUp';
import LoginForm from '../components/LoginForm';
import loginImage from '../images/login.jpg';
import styles from "./containers.module.css";

const AuthContainer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  const history = useHistory();

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
    <div className={styles.LoginContainer}>
      {isLoading && <Spin size="large" className="spinner" />}
      <div className={styles.LoginBox}>
        <img 
          src={loginImage}
          className={isLoaded ? styles.Image :  styles.ImageInvisible} 
          alt="logInImage"
          onLoad={() => setIsLoaded(true)}
        />
        <Switch>
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
          <Route 
            path="/"
            render={(props) => (
              <LoginForm 
                {...props} 
                onClickRenderSignUp={onClickRenderSignUp} 
                onClickLogIn={onClickLogIn}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default AuthContainer;
