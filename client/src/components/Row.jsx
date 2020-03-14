import React from 'react';
import styled from 'styled-components';

const Row = ({ row }) => {
  return (
    <StyledRowItem>
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
