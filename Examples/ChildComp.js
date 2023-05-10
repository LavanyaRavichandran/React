import React from "react";

function ChildComp({ childData }) {
  const data = "1234Child";
  childData(data);
  return <div>ChildComp</div>;
}

export default ChildComp;
