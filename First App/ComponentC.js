import React from "react";
import ComponentD from "./ComponentD";
function ComponentC() {
  const name = "lucky";
  return (
    <div>
      <p>Component C</p>
      <ComponentD fname={name} />
    </div>
  );
}
export default ComponentC;
