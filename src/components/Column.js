import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styles from './components.module.css';
import Player from './Player'

const Column = ({ column, players }) => {
  return (
    <div className={styles.ColumnContainer}>
      <h3>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {players.map((player, i) => <Player key={player.id} player={player} index={i} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable> 
    </div>
  );
};

export default Column;
