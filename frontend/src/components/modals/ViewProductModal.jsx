import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import { BsFillTrashFill, BsFillEyeFill } from 'react-icons/bs'


export default function ViewProductModal(props) {
      
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
  return (
      <>
      <Button className="btn btn-primary me-1 btn-sm" onClick={handleShow}>
        <BsFillEyeFill/>
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">View Products</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
          <table className="table">
          <thead className="thead-dark">
                        <tr>
                          <th>Product Name</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.products.map((product) => (
                          <tr key={product._id}>
                            <td>{product.productname}</td>
                            <td>{product.quantity}</td>
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
