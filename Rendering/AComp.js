import React, { useState } from "react";
import BComp from "./BComp";

function AComp() {
  console.log("app executes");
  const [count, setCount] = useState(0);
  const handle = () => {
    setCount(count + 1);
  };
  console.log("A executes");
  return (
    <div>
      AComp
      {count}
      <button onClick={handle}>Count</button>
      <BComp />
    </div>
  );
}

export default React.memo(AComp);
