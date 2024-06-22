import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Logo from "../assets/movie-mate-logo-2.png";
import { Link } from "react-router-dom";

const Register = () => {
  const onRegister = (e) => {
    e.preventDefault();
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
            <Form onSubmit={onRegister}>
              <Row className="mb-3">
                <Form.Group className="mb-3" controlId="exampleInputEmail1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" aria-describedby="emailHelp" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleInputPassword1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
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
