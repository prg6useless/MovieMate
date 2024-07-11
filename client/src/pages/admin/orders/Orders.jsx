import TableContent from "../../../components/TableContent";
import Paginate from "../../../components/Paginate";
import { Button, Card, CardHeader } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import {
  listOrder,
  setCurrentPage,
  setLimit,
} from "../../../slices/orderSlice";

import { useEffect, useCallback } from "react";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, limit, currentPage, total } = useSelector(
    (state) => state.orders
  );

  const getHeaders = (data) => {
    if (data.length === 0) return [];
    const {
      createdAt,
      id,
      _id,
      approvedBy,
      buyer,
      updatedAt,
      __v,
      products,
      ...rest
    } = data[0];
    return Object.keys(rest);
  };

  const initialFetch = useCallback(() => {
    dispatch(listOrder({ page: currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);
  return (
    <>
      <Card>
        <CardHeader className="fs-1">
          Orders
          <div className="d-flex justify-content-end">
            <Button>Add New Order</Button>
          </div>
        </CardHeader>

        <Card.Body>
          <TableContent headers={getHeaders(orders)} data={orders} />
        </Card.Body>
        <Paginate
          total={total}
          limit={limit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setLimit={setLimit}
        />
      </Card>
    </>
  );
};

export default Orders;
