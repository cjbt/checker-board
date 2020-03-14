import React from 'react';
import Row from './Row';

const RowList = ({ column, y, selectCurrentPos, currentPosition }) => {
  return (
    <>
      {column.map((row, i) => (
        <Row
          row={row}
          key={i}
          x={i}
          y={y}
          selectCurrentPos={selectCurrentPos}
          currentPosition={currentPosition}
        />
      ))}
    </>
  );
};

export default RowList;
