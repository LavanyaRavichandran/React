import axios from "axios";

import React, { useEffect, useState } from "react";
function AddStudent() {
  const [state, setState] = useState({
    roll_no: 4,
    name: "Elizabet",
    grade: "B",
    password: "asdfgh",
  });
  const posting = () => {
    const response = axios.post(" http://localhost:8089/addStudent", state);
    if (response) {
      console.log("success");
    } else {
      console.log("not done");
    }
    console.log(state);
  };

  useEffect(() => {
    posting();
  }, []);

  return <div>AddStudent</div>;
}

export default AddStudent;
