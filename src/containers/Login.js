import React from 'react';
import styles from "./containers.module.css";
import loginImage from '../images/login.jpg';
import Button from '../components/Button';

const Login = () => {
  return (
    <div className={styles.LoginContainer}>
      <div className={styles.LoginBox}>
        <img src={loginImage} className={styles.Image} alt="loginImage"/>
        <div className={styles.FormBox}>
          <h2>L o g i n</h2>
          <div className={styles.InputBox}>
            <input className={styles.Email} type="email" placeHolder="email" />
            <Button>Facebook Login</Button>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Login;
