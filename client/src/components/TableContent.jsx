import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useDispatch } from "react-redux";

import { deleteMovie } from "../slices/movieSlice";

const TableContent = ({ headers = [], data = [], edit, remove }) => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    setSelectedItem(null);
  };
  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

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
                      <Link to={`${edit}/${item.id || item?.slug}`}>
                        <CiEdit />
                      </Link>
                    )}
                    {remove && (
                      <>
                        <Button variant="link" onClick={() => handleShow(item)}>
                          <MdDeleteForever className="text-danger" />
                        </Button>
                      </>
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

      {selectedItem && (
        <Modal show={show} onHide={handleClose} backdrop={false}>
          <Modal.Header closeButton>
            <Modal.Title>Delete {selectedItem?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to remove this movie?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                dispatch(deleteMovie(selectedItem?.slug));
                handleClose();
              }}
            >
              Delete Movie
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default TableContent;
