import React, { useState } from "react";

function FormComponent({ changing }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(password);
  };
  return (
    <div style={{ alignItems: "center" }}>
      <h1>Login</h1>
      <form>
        <label htmlFor="Name">Name</label>
        <input
          value={name}
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="Password">Password</label>
        <input
          value={password}
          type="password"
          id="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <button
        onClick={() => {
          changing("register");
        }}
      >
        Register
      </button>
    </div>
  );
}

export default FormComponent;
