import React from 'react';
import styles from './components.module.css';
import { Draggable } from 'react-beautiful-dnd';

const Player = ({ player, index }) => {
  return (
    <Draggable draggableId={player.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={snapshot.isDragging? styles.ListPlayerBoxDragging : styles.ListPlayerBox}
        >
          {player.name}
        </div>
      )}
    </Draggable>
  );
};

export default Player;
