import React from 'react';
import styled from 'styled-components';
import RowList from './RowList';

const Column = ({
  column,
  y,
  move,
  selectCurrentPos,
  currentPosition = { currentPosition }
}) => {
  return (
    <StyledColumn>
      <StyledRow>
        <RowList
          column={column}
          y={y}
          move={move}
          selectCurrentPos={selectCurrentPos}
          currentPosition={currentPosition}
        />
      </StyledRow>
    </StyledColumn>
  );
};

const StyledColumn = styled.div``;
const StyledRow = styled.div`
  display: flex;
`;

export default Column;
