import React, { useState } from 'react';
import Button from '../components/Button';
import debounce from 'lodash/debounce';
import { COLOR } from '../constants/style';
import styles from './components.module.css';

const Members = ({ members, id, onClickSendInvitation, teamname }) => {
  const [email, setEmail] = useState('');
  const { byId, allIds } = members;
  
  const submit = () => {
    const token = window.localStorage.getItem('token');
    const data = {
      email,
      id,
      token,
      teamname,
    };

    onClickSendInvitation(data);
    setEmail('');
  };

  const debouncedSubmit = debounce(submit, 700);

  return (
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
            style={{ margin: 0, backgroundColor: COLOR.navy }}
          >
            Send
          </Button>
        </div>
        <div className={styles.MembersTextBox}>
          <h2>Team members</h2>
        </div>
        <div className={styles.MembersBox}>
          <ul>
            {allIds.length > 0 &&
              allIds.map((id) => (
                <li key={id + Math.random()}>{byId[id].name}</li>
              ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Members;
