import React from 'react';
import styles from "./components.module.css";
import './antd.css';
import loginImage from '../images/login.jpg';
import Button from './Button';
import SignUp from './SingUp';
import { Spin } from 'antd';
import LoginForm from './LoginForm';

const Login = ({ isLoading, onClickLogIn, onCLickSingUp, isSigning, onClickRenderSignUp, onClickCloseSignUp }) => {
  return (
    <>
      {isLoading && <Spin size="large" className="spinner" />}
      <div style={{ opacity: isLoading ? 0.1 : 1 }} className={styles.LoginContainer}>
        <div className={styles.LoginBox}>
          <img src={loginImage} className={styles.Image} alt="loginImage"/>
          {isSigning ? (
            <div className={styles.SingupBox}>
              <div className={styles.CloseButtonBox}>
                <button className={styles.CloseButton} onClick={onClickCloseSignUp}>X</button>
              </div>
              <h2>S i n g U p</h2>
              <SignUp onCLickSingUp={onCLickSingUp} />
            </div>
          ) : (
            <LoginForm onClickRenderSignUp={onClickRenderSignUp} onClickLogIn={onClickLogIn}/>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
