import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Logo from "../assets/movie-mate-logo-2.png";
import { Link } from "react-router-dom";

import { instance } from "../utils/axios";
import { useState } from "react";

const Register = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    const result = await instance.post("/users/register", payload);
    console.log({ payload, result });
    // Handle login logic here
  };
  return (
    <>
      {" "}
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
            />
          </div>
          <Card.Body className="p-5">
            <Card.Title>Register</Card.Title>
            <Form onSubmit={handleRegister}>
              <Row className="mb-3">
                <Form.Group className="mb-3" controlId="exampleInputName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="name"
                    onChange={(e) =>
                      setPayload((prev) => {
                        return { ...prev, name: e.target.value };
                      })
                    }
                    required
                  />
                </Form.Group>
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
              </Row>
              <div className="mb-3 text-start">
                Already have an account?{" "}
                <Link className="link text-decoration-none fw-bold" to="/login">
                  Login
                </Link>
              </div>
              <Button type="submit" className="btn btn-primary">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Register;
