import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="app">
      <h1>Modern Counter App</h1>
      <div className="counter-display">
        <h2>{count}</h2>
      </div>
      <div className="buttons">
        <button className="btn increment" onClick={increment}>Increment</button>
        <button className="btn decrement" onClick={decrement}>Decrement</button>
        <button className="btn reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
