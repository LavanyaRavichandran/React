import React, { useState } from "react";

function IncreDecreComponent() {
  const [state, setState] = useState(0);
  const handleI5 = () => {
    setState(state + 5);
  };
  const handleD1 = () => {
    setState(state - 1);
  };
  const Reset = () => {
    setState(0);
  };
  const IncreI10 = () => {
    setState(state + 10);
  };
  const Decred10 = () => {
    setState(state - 10);
  };
  return (
    <div>
      <p>{state}</p>
      <button onClick={handleI5}>Incre5</button>
      <button onClick={handleD1}>Decre1</button>
      <button onClick={Reset}>Reset1</button>
      <button onClick={IncreI10}>Incre10</button>
      <button onClick={Decred10}>Decre10</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default IncreDecreComponent;
