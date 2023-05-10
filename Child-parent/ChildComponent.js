import React from "react";
// function ChildComponent({ setCurrentVal }) {}
function ChildComponent({ childData }) {
  const data = "Lavanya";
  childData(data);
  //   setCurrentVal(data);
  return <div>ChildComponent</div>;
}

export default ChildComponent;
