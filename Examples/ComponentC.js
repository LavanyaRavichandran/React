import React, { useContext } from "react";
import ContextData from "../ContextApi";

function ComponentC(props) {
  const fname = useContext(ContextData);
  return <div>ComponentC{fname}</div>;
}

export default ComponentC;
