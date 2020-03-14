import React from 'react';
import styled from 'styled-components';
import ColumnList from './ColumnList';

const CheckerBoard = ({ state, selectCurrentPos, currentPosition, move }) => {
  return (
    <StyledCheckerBoardContainer>
      <ColumnList
        state={state}
        selectCurrentPos={selectCurrentPos}
        currentPosition={currentPosition}
        move={move}
      />
    </StyledCheckerBoardContainer>
  );
};

const StyledCheckerBoardContainer = styled.div`
  width: 600px;
  max-width: 600px;
  border: 2px solid black;
`;

export default CheckerBoard;
