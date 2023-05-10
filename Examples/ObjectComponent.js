import React, { useState } from "react";

function ObjectComponent() {
  const [val, setVal] = useState({ data: 0 });
  const handleClick = () => {
    setVal({ ...val, data: val.data + 1 });
  };
  return (
    <div>
      ObjectComponent{val.data}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default ObjectComponent;
