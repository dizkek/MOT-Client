import React, { useState } from 'react';
import styles from './components.module.css';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

const initialData = {
  players: {
    'players-1': { id: 'players-1', name : '지용' },
    'players-2': { id: 'players-2', name : '기업' },
    'players-3': { id: 'players-3', name : '태현' },
    'players-4': { id: 'players-4', name : '민선' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Team List',
      playersIds: ['players-1', 'players-2', 'players-3', 'players-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Best Eleven',
      playersIds: [],
    }
  },
  columnOrder: ['column-1', 'column-2'],
};

const BestEleven = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];
    if (start === finish) {
      const newPlayerids = Array.from(start.playersIds);
      newPlayerids.splice(source.index, 1);
      newPlayerids.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        playersIds: newPlayerids,
      };
  
      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        }
      };
  
      setData(newData);
      return;
    }

    const startPlayerIds = Array.from(start.playersIds);
    startPlayerIds.splice(source.index, 1);
    const newStart = {
      ...start,
      playersIds: startPlayerIds,
    };

    const finishPlayerIds = Array.from(finish.playersIds);
    finishPlayerIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      playersIds: finishPlayerIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setData(newData);
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.BestElevenContainer}>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const players = column.playersIds.map((playersId) => data.players[playersId]);
          return <Column key={column.id} column={column} players={players} />
        })}
      </div>
    </DragDropContext>
  );
};

export default BestEleven;
