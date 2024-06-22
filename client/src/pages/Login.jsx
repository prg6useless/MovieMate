import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../assets/movie-mate-logo-2.png";
import { Link } from "react-router-dom";

import { useState } from "react";
import { instance } from "../utils/axios";

const Login = () => {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await instance.post("/users/login", payload);
    console.log({ result });
  };

  const handleImageError = (e) => {
    e.target.src =
      "https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg";
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card style={{ width: "25rem" }}>
        <div className="text-center">
          <img
            src={Logo}
            className="img-fluid pt-3"
            alt="Movie Mate Logo"
            width="200px"
            onError={(e) => handleImageError(e)}
          />
        </div>
        <Card.Body className="p-5">
          <Card.Title>Login</Card.Title>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="exampleInputEmail1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                aria-describedby="emailHelp"
                onChange={(e) =>
                  setPayload((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleInputPassword1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) =>
                  setPayload((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
                required
              />
            </Form.Group>
            <div className="mb-3 text-start">
              Don&apos;t have an account?{" "}
              <Link
                className="link text-decoration-none fw-bold"
                to="/register"
              >
                Register
              </Link>
            </div>
            <div className="mb-3 text-end">
              <Link
                className="link text-decoration-none fw-bold"
                to="/forget-password"
              >
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" className="btn btn-primary">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
