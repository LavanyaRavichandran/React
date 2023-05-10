import React, { useState } from "react";
import hocount from "./CounterApp";
import CounterApp from "./CounterApp";

function IncremnetOnHover({ state, handleIncrement }) {
  //   const [state, setState] = useState(0);
  //   const handleIn = () => {
  //     setState(state + 1);
  //   };
  return (
    <div>
      {state}
      <button onMouseOver={handleIncrement}>incre</button>
    </div>
  );
}

export default hocount(IncremnetOnHover);
