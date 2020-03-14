import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Row = ({ row, x, y, selectCurrentPos, currentPosition, move }) => {
  const [selected, setSelected] = useState(false);
  const [position, setPosition] = useState([]);

  const handleClick = () => {
    if (currentPosition.length > 0) {
      handleMove();
    } else {
      selectCurrentPos([y, x]);
    }
  };

  const handleMove = () => {
    move(currentPosition, [y, x]);
    selectCurrentPos([]);
  };

  useEffect(() => {
    if (y === currentPosition[0] && x === currentPosition[1]) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [x, y, currentPosition]);
  console.log('position: ', position, 'currentPosition:', currentPosition);
  return (
    <StyledRowItem onClick={handleClick} selected={selected}>
      {row === 1 && <StyledCircle />}
      {row === 2 && <StyledSquare />}
    </StyledRowItem>
  );
};
const StyledRowItem = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) => (selected ? 'black' : 'white')};
`;
const StyledCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid white;
  background-color: red;
`;
const StyledSquare = styled(StyledCircle)`
  border-radius: 0;
`;

export default Row;
