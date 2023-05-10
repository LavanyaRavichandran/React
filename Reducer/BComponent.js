import React from "react";
import CComponent from "./CComponent";
import DComponent from "./DComponent";

function BComponent() {
  console.log("B executed");
  return (
    <div>
      BComponent
      <CComponent />
      <DComponent />
    </div>
  );
}

export default BComponent;
