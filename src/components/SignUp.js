import React from 'react';
import SingUpForm from './SingUpForm';
import styles from './components.module.css';

const SignUp = ({ onCLickSingUp, onClickCloseSignUp }) => {
  return (
    <div className={styles.SingupBox}>
      <div className={styles.CloseButtonBox}>
        <button className={styles.CloseButton} onClick={onClickCloseSignUp}>
          X
        </button>
      </div>
      <h2>S i n g U p</h2>
      <SingUpForm onCLickSingUp={onCLickSingUp} />
    </div>
  );
};

export default SignUp;
