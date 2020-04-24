import React from 'react';
import styles from "./components.module.css";
import './antd.css';
import loginImage from '../images/login.jpg';
import { Spin } from 'antd';

const Login = ({ isLoading }) => {
  return (
    <>
      {isLoading && <Spin size="large" className="spinner" />}
      <div style={{ opacity: isLoading ? 0.1 : 1 }} className={styles.LoginContainer}>
        <div className={styles.LoginBox}>
          <img src={loginImage} className={styles.Image} alt="logInImage"/>
        </div>
      </div>
    </>
  );
};

export default Login;
