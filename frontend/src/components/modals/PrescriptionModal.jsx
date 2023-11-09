import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import { BsFillTrashFill, BsFillEyeFill } from 'react-icons/bs'

export default function PrescriptionModal(props) {

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    

  return (
      <>
      <Button className="btn btn-primary mb-1" onClick={handleShow}>
        <BsFillEyeFill/>
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">View Prescription</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
           <img src={props.pic} alt="prescription" />
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
