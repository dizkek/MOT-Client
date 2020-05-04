import React, { useState } from 'react';
import Button from './Button';
import MatchSave from './MatchSave';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import { COLOR } from '../constants/style';
import { GOOGLE_MAP_URL } from '../constants/URL';
import styles from './components.module.css';

const Match = ({ 
  getMatchData, 
  teamId, 
  match, 
  teamName, 
  userId, 
  admin, 
  isLoading 
}) => {
  const [isModdyfing, setIsModifying] = useState(false);
  const lat = match[0] ? match[0].location[0] : 0;
  const lng = match[0] ? match[0].location[1] : 0;

  const Map = () => {
    return (
      <GoogleMap 
        defaultZoom={14} 
        defaultCenter={{ lat, lng }} 
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>  
    );
  };
  
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  
  if (isLoading) {
    return null;
  }

  if (!lat && admin !== userId) {
    return <h1 className={styles.MatchEmptyText}>현재 등록된 게임이 없습니다.</h1>;
  }

  if (!lat && admin === userId)
    return (
      <main className={styles.MatchMain}>
        <div className={styles.MatchContainer}>
          <h1>경기를 등록해주세요!</h1>
          {!isModdyfing ? (
            <Button 
              style={{ 
                marginTop: 0, 
                marginBottom: '10px', 
                padding: '4px', 
                backgroundColor: 
                COLOR.navy 
              }}
              onClickHandler={() => setIsModifying(true)}
            >
              Change
            </Button>
          ) : (
            <MatchSave 
              getMatchData={getMatchData} 
              teamId={teamId} 
              setIsModifying={setIsModifying}
            />
          )}
        </div>
      </main>
    );
 
  return (
    <main className={styles.MatchMain}>
      <div className={styles.MatchContainer}>
        {!isModdyfing ? (
          <>
            <div className={styles.MatchHeader}>Match of this week</div>
            <div className={styles.MatchDate}>
              {`${match[0].date} ${match[0].time}`}
            </div>
            <div className={styles.MatchVersus}>
              <div><h2>{teamName}</h2></div>
              <div><h2>VS</h2></div>
              <div><h2>{match[0].opponent}</h2></div>
            </div>
            {admin === userId && (
              <Button 
                style={{ 
                  marginTop: 0, 
                  marginBottom: '10px', 
                  padding: '4px', 
                  backgroundColor: COLOR.navy,
                }}
                onClickHandler={() => setIsModifying(true)}
              >
                Change
              </Button>
            )}
            <WrappedMap 
              googleMapURL={GOOGLE_MAP_URL}
              loadingElement={<div style={{ height: '100%', width: '100%' }} />}
              containerElement={<div style={{ height: '55%', width: '75%' }} />}
              mapElement={<div style={{ height: '100%', width: '100%' }} />}
            />
          </>         
        ) : (
          <MatchSave 
            getMatchData={getMatchData} 
            teamId={teamId} 
            setIsModifying={setIsModifying}
          />
        )}
      </div>
    </main>
  );
};

export default Match;
