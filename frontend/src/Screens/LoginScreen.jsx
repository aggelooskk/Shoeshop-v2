import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { loginUser } from "../Slices/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.user || { loading: false });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginUser({ email, password }));
      if (loginUser.fulfilled.match(resultAction)) {
        toast.success("Succesfull login");
        navigate("/");
      } else {
        toast.error(resultAction.payload);
      }
    } catch (err) {
      toast.error("An error occurred");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <h1>Sign In</h1>
      <FormGroup controlId="email" className="my-3">
        <FormLabel>Email Address</FormLabel>
        <FormControl
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>

      <FormGroup controlId="password" className="my-3">
        <FormLabel>Password</FormLabel>
        <FormControl
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>

      <Button type="submit" variant="dark" className="mt-3" disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </Button>

      <Row className="py-3">
        <Col>
          New Customer? <Link to="/register">Register</Link>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;