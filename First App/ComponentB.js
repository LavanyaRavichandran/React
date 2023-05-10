import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import ContextData from "./ContextApi";
function ComponentB() {
  const datai = useContext(ContextData);
  return (
    <div>
      <p>ComponentB{datai}</p>
      <ComponentC />
    </div>
  );
}
export default ComponentB;
