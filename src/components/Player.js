import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './components.module.css';

const Player = ({ player, index }) => {
  return (
    <Draggable draggableId={player._id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={
            snapshot.isDragging
              ? styles.ListPlayerBoxDragging
              : styles.ListPlayerBox
          }
        >
          {player.name}
        </div>
      )}
    </Draggable>
  );
};

export default Player;
