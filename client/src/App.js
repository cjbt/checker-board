import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    // create 8x8 grid
    const grid = new Array(8).fill(new Array(8).fill(0));
    // initialize with checkers in position
    const init = grid.map((outer, i) => {
      if (i === 5 || i === 7) {
        return outer.map((inner, index) => {
          if (index === 1 || index === 3 || index === 5 || index === 7) {
            return (inner = 1);
          }
          return inner;
        });
      } else if (i === 6) {
        return outer.map((inner, index) => {
          if (index === 0 || index === 2 || index === 4 || index === 6) {
            return (inner = 1);
          }
          return inner;
        });
      }
      return outer;
    });

    setState(init);
  }, []);

  if (!state.length) return <h1>Loading...</h1>;

  return (
    <StyledApp>
      <StyledCheckerBoardContainer>
        {state.map(column => {
          return (
            <StyledColumn>
              <StyledRow>
                {column.map(row => {
                  return <StyledRowItem>{row}</StyledRowItem>;
                })}
              </StyledRow>
            </StyledColumn>
          );
        })}
      </StyledCheckerBoardContainer>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;
const StyledCheckerBoardContainer = styled.div`
  width: 600px;
  max-width: 600px;
  border: 2px solid black;
`;
const StyledColumn = styled.div``;
const StyledRow = styled.div`
  display: flex;
`;
const StyledRowItem = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid yellow;
`;

export default App;
