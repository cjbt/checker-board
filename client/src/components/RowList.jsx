import React from 'react';
import Row from './Row';

const RowList = ({ column }) => {
  return (
    <>
      {column.map((row, i) => (
        <Row row={row} key={i} />
      ))}
    </>
  );
};

export default RowList;
