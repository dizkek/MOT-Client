import React from 'react';
import styles from './components.module.css';

const Button = ({ children, style, onClickHandler, type }) => {
  return (
    <button
      type={type || null}
      onClick={onClickHandler} 
      style={style} 
      className={styles.LoginButton}
    >
      {children}
    </button>
  );
};

export default Button;
