import React from 'react';
import styles from "./components.module.css";

const Button = ({ children, style }) => {
  
  return (
  <button style={style} className={styles.LoginButton}>{children}</button>
  );
};

export default Button;
