import React, { useRef, useState } from 'react';
import styles from './components.module.css';
import halfField from '../images/half field.png';

const members = [
  { name: '지용' },
  { name: '기업' },
  { name: '평교' },
  { name: '민선' },
  { name: '켄허' },
  { name: '현솔' },
  { name: '지연' },
  { name: '민지' },
  { name: '장짱' },
  { name: '태현' },
  { name: '인엽' },
  { name: '나단' },
  { name: '래영' },
  { name: '효정' },
  { name: '수댕' },
  { name: '영교' },
  { name: '한울' },
  { name: '바보' },
];


const TacticBoard = () => {
  const [currentPlayer, setCurrent] = useState('');
  const posX = useRef('');
  const posY = useRef('');
  const distX = useRef('');
  const distY = useRef('');

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
    currentPlayer.style.position = 'absolute';
    posX.current = e.pageX;
    posY.current = e.pageY;
    currentPlayer.style.marginLeft = `${posX.current + distX.current}px`;
    currentPlayer.style.marginTop = `${posY.current + distY.current}px`;
  };

  return (
    <>
      <div className={styles.FieldBox} >
        <div style={{ position: 'relative' }} onDragOver={over} onDrop={done}>
          <img src={halfField} className={styles.FieldImg} alt="halfField"/>  
        </div>
      </div>
      <div className={styles.PlayersBox} onDragOver={over} onDrop={done}>
        {members.map((member) => (
          <span className={styles.Player} draggable="true" onDragStart={start}>
            <span>{member.name}</span>
          </span>
        ))}
      </div>
    </>
  );
};

export default TacticBoard;
