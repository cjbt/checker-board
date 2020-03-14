import React from 'react';
import styled from 'styled-components';
import RowList from './RowList';

const Column = ({ column }) => {
  return (
    <StyledColumn>
      <StyledRow>
        <RowList column={column} />
      </StyledRow>
    </StyledColumn>
  );
};

const StyledColumn = styled.div``;
const StyledRow = styled.div`
  display: flex;
`;

export default Column;
