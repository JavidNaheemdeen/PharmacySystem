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
        const fetchOrders = async () => {
          try {
            const response = await axios.get("http://localhost:3000/api/order/user/" + userId);
            const ordersWithPharmacyName = await Promise.all(response.data.map(async (order) => {
              const pharmacyId = order.products[0].pharmacyId;
              const pharmacyResponse = await axios.get("http://localhost:3000/api/pharmacy/" + pharmacyId);
              const pharmacyName = pharmacyResponse.data.name; 
              return { ...order, pharmacyName };
            }));
            setOrders(ordersWithPharmacyName);
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchOrders();
      }, [userId]);
          

  return (
   <>
      <Button className="btn btn-def me-3" onClick={handleShow}>
      Orders
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">View All Orders</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
          <table className="table">
          <thead className="thead-dark">
                        <tr>
                          <th>Order Date/Time</th>
                          <th>Pharmacy</th>
                          <th>Total Price</th>
                          <th>Order Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((or) => (
                          <tr key={or._id}>
                            <td>{or.orderDate}</td>
                            <td>{or.pharmacyName}</td>
                            <td>{or.totalPrice}</td>
                            <td className={or.orderStatus === "Pending" ? "text-danger" : "text-success"}>{or.orderStatus}</td>
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
