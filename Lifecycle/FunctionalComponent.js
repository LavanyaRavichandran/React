import React, { useEffect, useState } from "react";

function FunctionalComponent() {
  const [val, setVal] = useState("Lavanya");
  const handleChange = (data) => {
    setVal(data);
  };
  useEffect(() => {
    console.log("Mounting Phase");
  }, []);
  useEffect(() => {
    console.log("Updating phase");
  }, [val]);
  useEffect(() => {
    console.log("unmounting");
    return console.log("hlkjhgfd");
  }, []);
  return (
    <div>
      {val}
      FunctionalComponent
      <button
        onClick={() => {
          handleChange("Changed");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default FunctionalComponent;
