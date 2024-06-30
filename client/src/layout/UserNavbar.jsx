import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/movie-mate-logo-2.png";

import { useSelector } from "react-redux";

import { FaCartPlus } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import "./UserNavbar.css";

const UserNavbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="position-fixed w-100" id="mainNavbar">
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
            <Link to="/cart">
              <Button variant="success" className="d-flex align-items-center">
                <FaCartPlus />
                <span className="ps-2">({quantity})</span>
              </Button>
            </Link>
            <Button
              className="mx-3"
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
