import React, { useState } from "react";
import BComponent from "./BComponent";

function AComponent() {
  console.log("A executed");
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCount(count + 10);
  };
  return (
    <div>
      {count}
      <button onClick={handleChange}>+</button>
      Component A
      <BComponent />
    </div>
  );
}

export default React.memo(AComponent);
