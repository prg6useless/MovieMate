import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";

import { useState } from "react";

import { useSelector } from "react-redux";

const Checkout = () => {
  const [payload, usePayoad] = useState({
    // buyer: "664f1ef74d47a275f5eb47f3",
    // total: 160,
    // products: [{
    //   quantity: 2,
    //   price: 50,
    //   amount: 100,
    //   movie: "664dd86b32ab3b7d89dd113e",
    // }],
  });
  const { cart, quantity } = useSelector((state) => state.cart);
  console.log({ cart, quantity });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form");
  };
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={4} className="order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ListGroup className="mb-3">
              <ListGroup.Item className="d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$8</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$5</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$5</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </ListGroup.Item>
            </ListGroup>

            <Card className="p-2">
              <Form>
                <InputGroup>
                  <Form.Control type="text" placeholder="Promo code" />
                  <Button type="submit" variant="secondary">
                    Redeem
                  </Button>{" "}
                </InputGroup>
              </Form>
            </Card>
          </Col>
          <Col md={8} className="order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <Form
              className="needs-validation"
              noValidate
              onSubmit={handleFormSubmit}
            >
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label htmlFor="firstName">First name</Form.Label>
                  <Form.Control
                    type="text"
                    id="firstName"
                    placeholder=""
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Valid first name is required.
                  </Form.Control.Feedback>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label htmlFor="lastName">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    id="lastName"
                    placeholder=""
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Valid last name is required.
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="username">Username</Form.Label>
                <InputGroup>
                  <InputGroup>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      id="username"
                      placeholder="Username"
                      required
                    />
                  </InputGroup>

                  <Form.Control.Feedback type="invalid">
                    Your username is required.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Form.Group>

              <hr className="mb-4" />

              <h4 className="mb-3">Payment</h4>

              <Form.Group>
                <Form.Check
                  type="radio"
                  label="Esewa"
                  id="esewa"
                  name="paymentMethod"
                />
                <Form.Check
                  type="radio"
                  label="Cash On Delivery"
                  id="khalti"
                  name="paymentMethod"
                />
                <Form.Control.Feedback type="invalid">
                  Please select a payment method.
                </Form.Control.Feedback>
              </Form.Group>

              <hr className="mb-4" />
              <Button variant="primary" size="lg" block type="submit">
                Continue to checkout
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
