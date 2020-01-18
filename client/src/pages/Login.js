import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import ErrorMessage from "../components/ErrorMessage";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { loginValidate } from '../helpers';

const LOGIN_URL = "http://localhost:8080/auth/login";

const LogIn = () => {
  const [user, setuser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [redirect, setRedirect] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setuser({
      ...user,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!loginValidate(user)) {
      // send data to server
      const data = {
        username: user.username,
        password: user.password
      };
      setError("");
      setLoading(true);
      axios
        .post(LOGIN_URL, data)
        .then(res => {
          // store TOKEN in localStorage
          localStorage.token = res.data.token;
          // redirect user to Dashboard
          setRedirect(true);
        })
        .catch(err => {
          setLoading(false);
          setError(JSON.parse(JSON.stringify(err.response.data.message)));
        });
    } else {
      // render error
      setError(loginValidate(user));
    }
  };

  // redirect to login page if singn up successful
  if(redirect) return <Redirect to="/dashboard" />;

  return (
    <Container>
      <section className="signup_section">
        <h1>Log In</h1>
        <hr />
        <Form className="signup_form" onSubmit={handleSubmit}>
          {error.length > 0 ? <ErrorMessage message={error} /> : null}
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Type username"
              value={user.username}
              onChange={e => handleChange(e)}
            />
            <p className="lead">
              Username must be longer than 2 characters and shorter than 30,
              username can only contain alphanumeric.{" "}
            </p>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              value={user.password}
              onChange={e => handleChange(e)}
            />
            <p className="lead">
              Password conatin at least 6 characters and 30 as max characters.
            </p>
          </FormGroup>

          <Button disabled={loading ? true : false} type="submit" color="primary" className="btn-block">
            {loading ? <Spinner color="info" /> : 'Log In'}
          </Button>
        </Form>
      </section>
    </Container>
  );
};

export default LogIn;
