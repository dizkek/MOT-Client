import React, { useState } from 'react';
import Button from './Button';
import { REG_PATTERNS } from '../constants/reg';
import { useHistory } from "react-router-dom";
import { COLOR } from '../constants/style';
import styles from './components.module.css';

const LoginForm = ({ onClickRenderSignUp, onClickLogIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!REG_PATTERNS.email.test(email)) {
      return alert('유효한 이메일을 입력해주세요');
    }

    const data = {
      email,
      password,
    };

    onClickLogIn(data, history);
  };

  return (
    <div className={styles.FormBox}>
      <h2>L o g i n</h2>
      <div className={styles.InputBox}>
        <form onSubmit={onSubmit}>
          <input
            className={styles.Input}
            value={email}
            type="email" 
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            className={styles.Input}
            value={password}
            type="password" 
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
          <Button 
            onClickHandler={onClickRenderSignUp} 
            style={{ backgroundColor: COLOR.navy }}
          >
            Sign Up
          </Button>
        </form>
    </div>
  </div>
  );
};

export default LoginForm;
