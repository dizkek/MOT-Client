import React, { useState } from 'react';
import styles from './components.module.css';
import Button from '../components/Button';
import debounce from 'lodash/debounce';

const Members = ({ members, id, onClickSendInvitation, teamname }) => {
  const [email, setEmail] = useState('');

  const submit = () => {
    const token = window.localStorage.getItem('token');
    const data = {
      email,
      id,
      token,
      teamname,
    };
    
    onClickSendInvitation(data);
  };

  const debouncedSubmit = debounce(submit, 700);

  return(
    <main className={styles.Main}>
      <div className={styles.MembersContainer}>
        <div className={styles.InviteTextBox}>
          <h2>Invite a new member</h2>
        </div>
        <div className={styles.InviteBox}>
          <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.InviteInput} 
            placeholder="Type email here" 
          />
          <Button 
            onClickHandler={debouncedSubmit} 
            style={{ margin: 0, backgroundColor: '#232D41' }}
          >
            Send
          </Button>
        </div>
        <div className={styles.MembersTextBox}>
          <h2>Team members</h2>
        </div>
        <div className={styles.MembersBox}>
          <ul>
            {members.length > 0 && 
              members.map((member) => <li key={member + Math.random()}>{member.name}</li>)}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Members;
