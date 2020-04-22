import React, { useState } from 'react';
import styles from "./components.module.css";
import loginImage from '../images/login.jpg';
import Button from './Button';
import SignUp from './SingUp';

const Login = ({ logIn, singUp }) => {
const [isSingUp, setIsSingUp] = useState(false);

  const onClickSingUp = () => {
    setIsSingUp(true);
  };
  return (
    <div className={styles.LoginContainer}>
      <div className={styles.LoginBox}>
        <img src={loginImage} className={styles.Image} alt="loginImage"/>
        {isSingUp ? (
          <div className={styles.SingupBox}>
            <div className={styles.CloseButtonBox}>
              <button className={styles.CloseButton}>X</button>
            </div>
            <h2>S i n g U p</h2>
            <SignUp singUp={singUp} />
          </div>
        ) : (
           <div className={styles.FormBox}>
            <h2>L o g i n</h2>
            <div className={styles.InputBox}>
              <input 
                className={styles.Input} 
                type="email" 
                placeholder="email" 
              />
              <input 
                className={styles.Input} 
                type="password" 
                placeholder="password" 
              />
             <Button>Login</Button>
             <Button onClickHandler={onClickSingUp} style={{ backgroundColor: '#232D41' }}>Sign Up</Button>
           </div>
         </div>
        )}
      </div>
    </div>
  );
};

export default Login;
