import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckerBoard from './components/CheckerBoard';

function App() {
  const [state, setState] = useState([]);
  const [start, setStart] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    // create 8x8 grid
    const grid = new Array(8).fill(new Array(8).fill(0));
    // initialize with checkers in position
    const initializePosition = grid.map((outer, i) => {
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
    setState(initializePosition);
  };

  const handleStart = () => {
    setStart(true);
  };

  if (!state.length) return <h1>Loading...</h1>;

  return (
    <StyledApp>
      {start ? (
        <>
          <CheckerBoard state={state} />
          <StyledButton onClick={init}>Reset</StyledButton>
        </>
      ) : (
        <StyledButton onClick={handleStart}>Start</StyledButton>
      )}
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  padding: 20px 50px;
`;

export default App;
