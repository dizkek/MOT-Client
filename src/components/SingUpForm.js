import React, { useState } from 'react';
import Button from './Button';
import styles from './components.module.css';
import { REG_PATTERNS } from '../constants';
import { useHistory } from 'react-router-dom';

const SingUpForm = ({ onCLickSingUp }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!REG_PATTERNS.email.test(email)) {
      return alert('유효한 이메일을 입력해주세요');
    } else if (!REG_PATTERNS.name.test(name)) {
      return alert('이름은 2-4글자 한글만 가능합니다.');
    } else if (!REG_PATTERNS.password.test(password)) {
      return alert('비밀번호는 8자부터 20자 사이입니다');
    } else if (confirmedPassword !== password) {
      return alert('비밀번호를 다시 확인해주세요');
    }

    const data = {
      email,
      name,
      password,
      confirmedPassword,
    };
    
    onCLickSingUp(data, history);
  };
  
  return (
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
        value={name}
        type="text" 
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
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
      <input 
        className={styles.Input}
        value={confirmedPassword}
        type="password" 
        placeholder="confrim password"
        onChange={(e) => setConfirmedPassword(e.target.value)}
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SingUpForm;
