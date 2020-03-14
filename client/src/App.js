import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

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
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
