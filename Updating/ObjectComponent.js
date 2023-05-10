import React, { useState } from "react";

function ObjectComponent() {
  const [val, setVal] = useState({ data: 0 });
  const handleIncre = () => {
    setVal({ ...val, data: val.data + 1 });
  };
  const handleDecre = () => {
    setVal({ ...val, data: val.data - 1 });
  };
  const handleReset = () => {
    setVal({ ...val, data: 0 });
  };
  return (
    <div>
      <p>{val.data}</p>
      <button onClick={handleIncre}>Incre</button>
      <button onClick={handleDecre}>Decre</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default ObjectComponent;
