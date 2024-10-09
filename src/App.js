import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <div className="app">
      <h1>Modern Counter App</h1>
      <div className="counter-display">
        <h2>{count}</h2>
      </div>
      <div className="buttons">
        <button className="btn increment" onClick={increment}>Increment</button>
        <button 
          className="btn decrement" 
          onClick={decrement}
          disabled={count === 0}  // Disabled the button if count is 0
        >
          Decrement
        </button>
        <button className="btn reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
