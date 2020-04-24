import React, { useState, } from 'react';
import Button from './Button';
import styles from './components.module.css';
import { useHistory } from "react-router-dom";
import { COLOR } from '../constants';

const RegisterForm = ({ onCLickRegisterTeam, email }) => {
  const [teamName, setTeamName] = useState('');
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    onCLickRegisterTeam(teamName, email, history);
  };

  return (
    <div className={styles.RegisterContainer}>
      <div className={styles.RegisterBox}>
        <form onSubmit={onSubmit}>
          <h2 className={styles.RegisterText}>Register Team</h2>
          <input
            className={styles.Input}
            value={teamName}
            type="text"
            placeholder="team name"
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
          <Button type="submit" >Register</Button>
          <Button 
            type="button" 
            onClickHandler={() => history.push("/teams")} 
            style={{ backgroundColor: COLOR.navy, marginLeft: 5 }}
          >
            Back
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
