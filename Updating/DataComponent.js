import React, { useState } from "react";

function DataComponent() {
  const [val, setVal] = useState(0);
  const handleIncre = () => {
    setVal(val + 1);
  };
  const handleDecre = () => {
    setVal(val - 1);
  };
  const handleReset = () => {
    setVal(0);
  };

  return (
    <div>
      <p>{val}</p>
      <button onClick={handleIncre}>Incre</button>
      <button onClick={handleDecre}>Decre</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default DataComponent;
