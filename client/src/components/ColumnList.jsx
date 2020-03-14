import React from 'react';
import Column from './Column';

const ColumnList = ({ state }) => {
  return (
    <>
      {state.map((column, i) => (
        <Column column={column} key={i} />
      ))}
    </>
  );
};

export default ColumnList;
