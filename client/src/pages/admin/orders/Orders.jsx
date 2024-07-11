import TableContent from "../../../components/TableContent";
import Paginate from "../../../components/Paginate";
import { Button, Card, CardHeader } from "react-bootstrap";

const Orders = () => {
  const header = ["name", "email", "buyer", "type", "status", "total"];
  const data = [
    {
      name: "Saral Sainju",
      email: "saral@gmail.com",
      buyer: 19287391273,
      type: "Online",
      status: "pending",
      total: 3000,
    },
    {
      name: "Saral Sainju",
      email: "saral@gmail.com",
      buyer: 19287391273,
      type: "Online",
      status: "pending",
      total: 3000,
    },
  ];

  // const handleEdit = () => {};
  // const handleDelete = () => {};
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
          <TableContent headers={header} data={data} />
        </Card.Body>
        <Paginate
          total={10}
          limit={5}
          currentPage={1}
          setCurrentPage={()=>{}}
          setLimit={()=>{}}
        />
      </Card>
    </>
  );
};

export default Orders;
