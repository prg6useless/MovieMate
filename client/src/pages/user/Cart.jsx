import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Button, Table } from "react-bootstrap";
// import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  removeAll,
} from "../../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, quantity } = useSelector((state) => state.cart);
  const totalAmount = () =>
    cart.reduce((acc, obj) => acc + obj.quantity * obj.price, 0);

  return (
    <>
      {/* {cart.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}*/}

      <div className="d-flex justify-content-center align-items-center flex-column gap-2">
        {cart?.length > 0 ? (
          <FullCart
            cart={cart}
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
            dispatch={dispatch}
            totalAmount={totalAmount}
          />
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};

const FullCart = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  dispatch,
  totalAmount,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center p-4">
        <Container className="p-5 border rounded w-80">
          <Row>
            <Table bordered className="text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Available Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Button variant="link">
                        <RiDeleteBin6Line
                          color="red"
                          onClick={() => dispatch(removeItem(item?.slug))}
                        />
                      </Button>
                    </td>
                    <td>
                      <img
                        src={item?.poster}
                        alt={item?.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      {item?.title}
                    </td>
                    <td>${item?.price}</td>
                    <td className="d-flex justify-content-between">
                      <Button
                        className="btn-success btn-sm"
                        onClick={() => dispatch(decreaseQuantity(item))}
                      >
                        -
                      </Button>
                      {item?.quantity}
                      <Button
                        className="btn-danger btn-sm"
                        onClick={() => dispatch(increaseQuantity(item))}
                      >
                        +
                      </Button>
                    </td>
                    <td>{item?.seats - item?.quantity}</td>
                    <td>${item?.price * item?.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Table bordered>
              <tbody>
                <tr>
                  <td className="fw-bold">TOTAL</td>
                  <td className="fw-bold">${totalAmount()}</td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-start align-items-center w-50 gap-4">
              <Button variant="danger" onClick={() => dispatch(removeAll())}>
                REMOVE ALL ITEMS
              </Button>
              <Button variant="success" onClick={() => navigate("/checkout")}>
                PROCEED TO CHECKOUT
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

const EmptyCart = () => {
  return (
    <>
      <h1>No Items In Cart</h1>
      <Link to="/">
        <Button
          variant="success"
          className="d-flex align-items-center text-decoration-none"
        >
          Start Shopping
        </Button>
      </Link>
    </>
  );
};

export default Cart;
