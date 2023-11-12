import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import { BsFillTrashFill, BsFillEyeFill } from 'react-icons/bs'

export default function ViewAllOrders() {

      const [orders, setOrders] = useState([]);

      const userId = localStorage.getItem("userId");

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      useEffect(() => {
            axios
              .get("http://localhost:3000/api/order/user/" + userId)
              .then((res) => {
                setOrders(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }, []);
          

  return (
   <>
      <Button className="btn btn-primary me-1" onClick={handleShow}>
      View Orders
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">View Orders</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
          <table className="table">
          <thead className="thead-dark">
                        <tr>
                          <th>Product Name</th>
                          <th>Quantity</th>
                          <th>Sub Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((or) => (
                          <tr key={or._id}>
                            <td>{or.productname}</td>
                            <td>{or.quantity}</td>
                            <td>{or.subtotal}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Exit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
