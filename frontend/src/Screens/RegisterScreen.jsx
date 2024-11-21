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
import { registerUser } from "../Slices/userSlice";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.user || { loading: false });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const resultAction = await dispatch(
        registerUser({ name, email, password })
      );
      if (registerUser.fulfilled.match(resultAction)) {
        toast.success("Registration successful!");
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
      <h1>Sign Up</h1>
      <FormGroup controlId="name" className="my-3">
        <FormLabel>Name</FormLabel>
        <FormControl
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>

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

      <FormGroup controlId="confirmPassword" className="my-3">
        <FormLabel>Confirm Password</FormLabel>
        <FormControl
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormGroup>

      <Button type="submit" variant="dark" className="mt-3" disabled={loading}>
        {loading ? "Loading..." : "Register"}
      </Button>

      <Row className="py-3">
        <Col>
          Have an Account? <Link to="/login">Login</Link>
        </Col>
      </Row>
    </Form>
  );
};

export default Register;
