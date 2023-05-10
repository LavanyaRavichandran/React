import React, { useContext } from "react";
import ComponentB from "./ComponentB";
import ContextData from "./ContextApi";
function ComponentA() {
  // const data = useContext(ContextData);
  return (
    <div>
      <p>ComponentA</p>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
