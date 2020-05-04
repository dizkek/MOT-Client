import React, { useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import halfField from '../images/half field.png';
import { ABSOLUTE } from '../constants/style';
import styles from './components.module.css';

const TacticBoard = ({ 
  regularIds = [], 
  allPlayers, 
  onClickSaveFormation, 
  id, 
  teamname,
}) => {
  const [currentPlayer, setCurrent] = useState('');
  const history = useHistory();
  const posX = useRef('');
  const posY = useRef('');
  const distX = useRef('');
  const distY = useRef('');

  const playersContainer = useRef('');

  const start = (e) => {
    setCurrent(e.target);
    posX.current = e.pageX;
    posY.current = e.pageY;
    distX.current = e.target.offsetLeft - posX.current;
    distY.current = e.target.offsetTop - posY.current;
  };

  const over = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const done = (e) => {
    e.stopPropagation();
    e.preventDefault();
    currentPlayer.style.position = ABSOLUTE;
    posX.current = e.pageX;
    posY.current = e.pageY;
    currentPlayer.style.marginLeft = `${posX.current + distX.current}px`;
    currentPlayer.style.marginTop = `${posY.current + distY.current}px`;
  };

  return (
    <>
      <button 
        onClick={() => 
          onClickSaveFormation(playersContainer.current, id, history, teamname)
        }
      >
        save
      </button>
      <div className={styles.FieldBox}>
        <div style={{ position: 'relative' }} onDragOver={over} onDrop={done}>
          <img src={halfField} className={styles.FieldImg} alt="halfField" />  
        </div>
      </div>
      <div 
        ref={playersContainer} 
        className={styles.PlayersBox} 
        onDragOver={over} 
        onDrop={done}
      >
        {regularIds.map((id) => (
          <span 
            key={id} 
            className={styles.Player} 
            draggable="true" 
            onDragStart={start}
          >
            <span>{allPlayers[id].name}</span>
          </span>
        ))}
      </div>
    </>
  );
};

export default TacticBoard;
