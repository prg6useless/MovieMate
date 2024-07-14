import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

const TableContent = ({ headers = [], data = [], edit }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No.</th>
            {headers.map((items, index) => {
              return (
                <th key={index} className="text-capitalize text-center">
                  {items}
                </th>
              );
            })}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {headers.map((key, index) => {
                    return <td key={index}>{item[key]}</td>;
                  })}
                  <td>
                    {edit && (
                      <Link to={`${edit}/${item.id}`}>
                        <CiEdit />
                      </Link>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={headers.length + 2} style={{ textAlign: "center" }}>
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableContent;
