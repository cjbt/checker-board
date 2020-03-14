import React from 'react';
import Column from './Column';

const ColumnList = ({ state, selectCurrentPos, currentPosition }) => {
  return (
    <>
      {state.map((column, i) => (
        <Column
          column={column}
          key={i}
          y={i}
          selectCurrentPos={selectCurrentPos}
          currentPosition={currentPosition}
        />
      ))}
    </>
  );
};

export default ColumnList;
