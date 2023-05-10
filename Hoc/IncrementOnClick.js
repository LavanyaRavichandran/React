import React, { useState } from "react";
import IncremnetOnHover from "./IncremnetOnHover";
import CounterApp from "./CounterApp";
import hocount from "./CounterApp";
function IncrementOnClick({ state, handleIncrement }) {
  //   const [state, setState] = useState(0);
  //   const handleIn = () => {
  //     setState(state + 1);
  //   };
  return (
    <div>
      {state}
      <button onClick={handleIncrement}>incre</button>
      <IncremnetOnHover />
    </div>
  );
}

export default hocount(IncrementOnClick);
