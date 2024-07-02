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
  const [payload, setPayload] = useState({
    type: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const { cart, quantity } = useSelector((state) => state.cart);
  console.log({ cart, quantity });

  const totalAmount = () =>
    cart
      .reduce((acc, obj) => acc + obj.quantity * obj.price, 0)
      .toLocaleString();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(payload);
    // buyer: "664f1ef74d47a275f5eb47f3",
    // total: 160,
    // products: [{
    //   quantity: 2,
    //   price: 50,
    //   amount: 100,
    //   movie: "664dd86b32ab3b7d89dd113e",
    // }],
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
              {cart?.length > 0 &&
                cart?.map((item, index) => {
                  return (
                    <ListGroup.Item
                      className="d-flex justify-content-between lh-condensed gap-1"
                      key={index}
                    >
                      <div>
                        <img
                          src={item?.poster}
                          style={{
                            height: "40px",
                            width: "40px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div>
                        <h6 className="my-0">{item?.title}</h6>
                        <small className="text-muted">
                          {item?.synopsis.slice(0, 30).concat("...")}
                        </small>
                      </div>
                      <span className="text-muted">{item?.quantity}</span>
                      <span className="text-muted">
                        ${item?.price.toLocaleString()}
                      </span>
                      <span>
                        ${(item?.price * item?.quantity).toLocaleString()}
                      </span>
                    </ListGroup.Item>
                  );
                })}
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Total</span>
                <strong>${totalAmount()}</strong>
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
            <h4 className="mb-3">Billing Information</h4>
            <Form className="needs-validation" onSubmit={handleFormSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label htmlFor="firstName">First name</Form.Label>
                  <Form.Control
                    type="text"
                    id="firstName"
                    onChange={(e) =>
                      setPayload((prev) => {
                        return { ...prev, firstName: e.target.value };
                      })
                    }
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
                    onChange={(e) =>
                      setPayload((prev) => {
                        return { ...prev, lastName: e.target.value };
                      })
                    }
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Valid last name is required.
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  onChange={(e) =>
                    setPayload((prev) => {
                      return { ...prev, email: e.target.value };
                    })
                  }
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
                  value="Online"
                  name="paymentMethod"
                  onChange={(e) =>
                    setPayload((prev) => {
                      return { ...prev, type: e.target.value };
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Cash On Delivery"
                  value="Cash On Delivery"
                  name="paymentMethod"
                  onChange={(e) =>
                    setPayload((prev) => {
                      return { ...prev, type: e.target.value };
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please select a payment method.
                </Form.Control.Feedback>
              </Form.Group>

              <hr className="mb-4" />
              <Button variant="primary" size="lg" type="submit">
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
