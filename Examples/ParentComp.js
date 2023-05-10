import React, { useState } from "react";
import ChildComp from "./ChildComp";
function ParentComp() {
  const [val, setVal] = useState("");
  const ChildData = (info) => {
    setVal(info);
  };
  return (
    <div>
      ParentComp{val}
      <ChildComp childData={ChildData} />
    </div>
  );
}

export default ParentComp;
