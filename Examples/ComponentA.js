import React, { useContext } from "react";
import ContextData from "../ContextApi";
import ComponentB from "./ComponentB";

function ComponentA() {
  const fname = useContext(ContextData);
  return (
    <div>
      ComponentA
      {fname}
      <ComponentB />
    </div>
  );
}

export default ComponentA;
