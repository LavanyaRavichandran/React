import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const navigate = useNavigate();
  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (state.email == "" || state.password == "") {
      alert("enter the values");
    } else {
      navigate("/dash");
    }
  };
  //   const [mail, setMail] = useState();
  //   const [password, setPassword] = useState();
  //   const handleEmail = (e) => {
  //     const mail = e.target.value;
  //     if (mail.length != 0) {
  //       setMail(true);
  //     } else {
  //       setMail(false);
  //     }
  //   };
  //   const handlePassword = (e) => {
  //     const pass = e.target.value;
  //     if (pass.length != 0) {
  //       setPassword(true);
  //     } else {
  //       setPassword(false);
  //     }
  //   };
  //   const handleSubmit = () => {
  //     if (mail && password) {

  //     }

  //     //   mail && password ? null : alert(`enter mail and password`);
  //   };
  return (
    <Form className="px-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default LoginComponent;
