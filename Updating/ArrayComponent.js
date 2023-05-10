import React, { useState } from "react";

function ArrayComponent() {
  const [val, setVal] = useState([]);
  const updatearr = () => {
    const value1 = [...val];
    value1.push(1);
    setVal(value1);
  };

  return (
    <div>
      <button onClick={updatearr}>Click</button>
      {val.map((value) => {
        return <span>{value}</span>;
      })}
    </div>
  );
}

export default ArrayComponent;
