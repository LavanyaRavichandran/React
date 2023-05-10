import React from "react";

function CComponent() {
  console.log("C executed");
  return <div>CComponent</div>;
}

export default React.memo(CComponent);
