import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Row = ({ row, x, y, selectCurrentPos, currentPosition, move }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    // set color of reach divs
    if (y === 1 || y === 3 || y === 5 || y === 7) {
      if (x === 1 || x === 3 || x === 5 || x === 7) {
        setColor('black');
      } else {
        setColor('red');
      }
    } else if (y === 0 || y === 2 || y === 4 || y === 6) {
      if (x === 0 || x === 2 || x === 4 || x === 6) {
        setColor('black');
      } else {
        setColor('red');
      }
    }
  }, [x, y]);

  const [selected, setSelected] = useState(false);

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
  return (
    <StyledRowItem onClick={handleClick} selected={selected} color={color}>
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
  background-color: ${({ selected, color }) => (selected ? 'yellow' : color)};

  &:hover {
    background-color: yellow;
  }
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
