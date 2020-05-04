import React, { useCallback } from 'react';
import Column from './Column';
import Button from '../components/Button';
import { DragDropContext } from 'react-beautiful-dnd';
import styles from './components.module.css';

const BestEleven = ({ data, setData, onClickDisplayTactic }) => {
  
  const onDragEnd = useCallback ((result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
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
  }, [data, setData]);
  
  return (
    <>
      <Button style={{ margin: 15 }} onClickHandler={onClickDisplayTactic}>
        Save
      </Button>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.BestElevenContainer}>
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const players = column.playersIds.map(
              (playersId) => data.players[playersId]
            );
            return <Column key={column.id} column={column} players={players} />;
          })}
        </div>
      </DragDropContext>
    </>
  );
};

export default BestEleven;
