import React from "react";

function BComp() {
  console.log("B executes");
  return <div>BComp</div>;
}

export default React.memo(BComp);
