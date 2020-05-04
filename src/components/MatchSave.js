import React, { useState } from 'react';
import Button from './Button';
import Geocode from 'react-geocode';
import debounce from 'lodash/debounce';
import styles from './components.module.css';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API);
Geocode.enableDebug();

const MatchSave = ({ getMatchData, teamId, setIsModifying }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [opponent, setOpponent] = useState('');
  const [location, setLocation] = useState('');

  const submit = async () => {
    if (!date || !time || !opponent) return alert('모두 입력해주세야 됩니다!');
    try {
      const response = await Geocode.fromAddress(location);
      const { lat, lng } = response.results[0].geometry.location;
      const data = {
        match: {
          date,
          time,
          opponent,
          location: [lat, lng],
        },
        teamId,
      };

      await getMatchData(data);
      setIsModifying(false);
    } catch (error) {
      alert('장소를 다시 입력해주세요!');
    }
  };
  
  const onClickSaveMatch = debounce(submit, 1000);

  return (
    <div className={styles.MatchSettingBox}>
      <h1 className={styles.MatchSaveInstruction}>Fill this out and save!</h1>
      <div className={styles.MatchDateBox}>
        날짜:
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          required
        />
        시간:
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="time"
          required
        />
      </div>
      <div className={styles.MatchLocationBox}>
        <input
          value={opponent}
          onChange={(e) => setOpponent(e.target.value)}
          type="text"
          placeholder="상대팀 이름"
          required
        />
        <input
          type="text"
          value={location}
          placeholder="장소이름"
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <Button 
        style={{ width: '70px', marginTop: '5px' }} 
        onClickHandler={onClickSaveMatch}
      >
        Save
      </Button>
      <Button 
        style={{ width: '70px', marginTop: '5px' }} 
        onClickHandler={() => setIsModifying(false)}
      >
        Back
      </Button>
  </div> 
  );
};

export default MatchSave;
