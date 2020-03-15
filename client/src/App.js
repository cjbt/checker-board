import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CheckerBoard from './components/CheckerBoard';

function App() {
  const [state, setState] = useState([]);
  const [start, setStart] = useState(true);
  const [currentPosition, setCurrentPosition] = useState([]);

  useEffect(() => {
    axios.get('https://bw-pt-bucket-list.herokuapp.com/api/state').then(res => {
      console.log('hello: ', res.data.state);
      setState(res.data.state);
    });
  }, []);

  useEffect(() => {
    if (state.length) {
      axios
        .put('https://bw-pt-bucket-list.herokuapp.com/api/state', { state })
        .then(res => console.log(res, 'changed!'));
    }
  }, [state, setState]);

  const init = async () => {
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

  const handleReset = () => {
    init();
    setCurrentPosition([]);
  };

  const selectCurrentPos = tuple => {
    setCurrentPosition(tuple);
  };

  const move = async (currentPos, nextPos) => {
    let grid = [...state];
    // you cannot select an empty position
    if (grid[currentPos[0]][currentPos[1]] === 0)
      return new Error('Not a currentPos');
    // you cannot move to a non-empty position
    if (grid[nextPos[0]][nextPos[1]] > 0) return new Error('Space not empty');
    if (currentPos[1] === nextPos[1])
      return new Error('You can only move diagonally');
    if (nextPos[0] >= currentPos[0] + 1) return new Error('invalid move');

    // swap current position to next position
    const newGrid = grid.map((outer, i) => {
      if (i === currentPos[0]) {
        return outer.map((inner, index) => {
          if (index === currentPos[1]) {
            return grid[nextPos[0]][nextPos[1]];
          }
          return inner;
        });
      } else if (i === nextPos[0]) {
        // edge, transform to 2
        if (i === 0) {
          return outer.map((inner, index) => {
            if (index === nextPos[1]) {
              return 2;
            }
            return inner;
          });
        }
        return outer.map((inner, index) => {
          if (index === nextPos[1]) {
            return grid[currentPos[0]][currentPos[1]];
          }
          return inner;
        });
      }
      return outer;
    });

    setState(newGrid);
  };
  console.log(state);
  if (!state.length) return <h1>Loading...</h1>;

  return (
    <StyledApp>
      {start ? (
        <>
          <CheckerBoard
            state={state}
            selectCurrentPos={selectCurrentPos}
            currentPosition={currentPosition}
            move={move}
          />
          <StyledInfo>
            <StyledButton onClick={handleReset}>Reset</StyledButton>
            <p>current: {JSON.stringify(currentPosition)}</p>
          </StyledInfo>
        </>
      ) : (
        <StyledButton onClick={handleStart}>Start</StyledButton>
      )}
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
const StyledInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const StyledButton = styled.button`
  padding: 20px 50px;
`;

export default App;
