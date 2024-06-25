import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/movie-mate-logo-2.png";

import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100">
      <Container fluid>
        <Navbar.Brand>
          <img src={Logo} height={30} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Nav.Link href="/">About Us</Nav.Link>
            {/* <Nav.Link href="/cart">Cart</Nav.Link>*/}

            <Link to="/settings" style={{ textDecoration: "none" }}>
              Settings
            </Link>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
            <Button
              onClick={() => navigate("/login")}
              variant="outline-success"
            >
              Login
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
