import React, { useState } from "react";

function FormComponent() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("false");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("false");
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState();
  const [vaild, setisValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(password);
    setName("");
    setEmail("");
    setPassword("");
  };
  const handleChangeName = (e) => {
    const nlen = e.target.value;
    if (nlen.length < 4) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    setName(nlen);
  };
  const handleChangePassword = (e) => {
    const plen = e.target.value;
    if (plen.length < 3) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(plen);
  };
  const regex = /\S+@\S+\.\S+/;
  const handleEmail = (e) => {
    const mail = e.target.value;
    if (regex.test(mail)) {
      setisValid(true);
    } else {
      setisValid(false);
    }
    setEmail(mail);
  };
  const handleCheckBox = (e) => {
    const choice = e.target.value;
    if (choice) {
      setCheck(choice);
    } else {
      setCheck(choice);
    }
  };
  return (
    <div>
      <h1>Form Validation</h1>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="fname"
          onChange={handleChangeName}
          value={name}
        ></input>
        {nameErr ? <p>Enter atleast four character</p> : null}
        <br />
        <label>Password</label>
        <input
          type="password"
          name="pass"
          onChange={handleChangePassword}
          value={password}
        ></input>
        {passwordErr ? <p>Enter a correct length password</p> : null}
        <br />
        <label>Email</label>
        <input
          type="email"
          name="pEmail"
          onChange={handleEmail}
          value={email}
        ></input>
        {vaild ? null : <p>Enter valid email</p>}
        <br />
        <input type="checkbox" onChange={handleCheckBox}></input>
        <span>Entered all correctly</span>
        {check ? null : <p>Click the checkBox</p>}
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
