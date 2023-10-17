import React from 'react'
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function UpdateProdModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button className='btn btn-success btn-sm me-1' onClick={handleShow}>
        Update
      </Button>

      <Modal show={show}
        size="lg"
        centered
      >
        <Modal.Header>

          <Modal.Title id="contained-modal-title-vcenter">Update Product</Modal.Title>

        </Modal.Header>


        <Form>
          <Modal.Body>

            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Product Name:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Generic Name:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Form:
                  </Form.Label>
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" />
                </Col>
                <Col sm={2}>
                  <Form.Label>
                    Batch Number:
                  </Form.Label>
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Quantity:
                  </Form.Label>
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" />
                </Col>
                <Col sm={2}>
                  <Form.Label>
                    Unit Price:
                  </Form.Label>
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Image:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control type="file" />
                </Col>
              </Form.Group>
            </fieldset>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Exit
            </Button>

          </Modal.Footer>

        </Form>
      </Modal>

    </>
  )
}
