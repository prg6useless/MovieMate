import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getOneOrder } from "../../../slices/orderSlice";

const Order = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.orders);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const orderId = pathname.split("/")[3];

  useEffect(() => {
    dispatch(getOneOrder(orderId));
  }, [dispatch, orderId]);

  console.log(order);
  return <div>Order</div>;
};

export default Order;
