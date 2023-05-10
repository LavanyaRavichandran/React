import React, { useState } from "react";

function FormRegister({ changing }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(password);
    console.log(email);
  };
  return (
    <div style={{ alignItems: "center" }}>
      <h1>Register</h1>
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
        <label htmlFor="Email">Email</label>
        <input
          value={email}
          type="email"
          id="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <button
        onClick={() => {
          changing("login");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default FormRegister;
