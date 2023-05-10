import React, { useState } from "react";

const hocount = (WrappedComponent) => {
  function CountFunction() {
    const [state, setState] = useState(0);
    const handleIncrement = () => {
      setState(state + 1);
    };
    return <WrappedComponent state={state} handleIncrement={handleIncrement} />;
  }
  return CountFunction;
};

export default hocount;
