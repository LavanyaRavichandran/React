import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [currentVal, setCurrentVal] = useState("");
  const ChildData = (info) => {
    setCurrentVal(info);
  };

  return (
    <div>
      ParentComponent
      <p>Hi {currentVal}</p>
      <ChildComponent childData={ChildData} />
      {/* <ChildComponent setCurrentVal={setCurrentVal} /> */}
    </div>
  );
}

export default ParentComponent;
