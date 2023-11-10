import React, { useState, useEffect } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export default function UsprofEditModal(props) {

  const [show, setShow] = useState(false);

  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const userData = {
    name,
    email,
    address,
    contact,
    // password,
  };

  const updateUserShow = () => {
    console.log(props.userId);
    setUserId(props.userId);

    axios
      .get(`http://localhost:3000/api/user/${props.userId}`)
      .then(function (response) {
        setName(response.data.name);
        setAddress(response.data.address);
        setContact(response.data.contact);
        setEmail(response.data.email);
        // setPassword(response.data.password);
        setShow(true);
      })
      .catch(function (error) {
        console.log(error);
        alert('Invalid');
      });
  };

  function submitForm(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/api/user/updateuser/${props.userId}`, userData)
      .then(function (response) {
        setName('');
        setAddress('');
        setContact('');
        setEmail('');
        // setPassword('');
        setShow(false);
        Swal.fire({
          title: 'Success!',
          text: 'User updated Successfully',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then(() => {
          window.location.reload();
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-success btn-sm me-1" onClick={updateUserShow}>
        <BsFillPencilFill />
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Update User</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>Name:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>Address:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>Contact:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>Email:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
            </fieldset>

            {/* <fieldset>
                                   <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Col sm={2}>
                                             <Form.Label>Password:</Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                             <Form.Control
                                                  type="password"
                                                  value={password}
                                                  onChange={(e) => {
                                                       setPassword(e.target.value);
                                                  }}
                                             />
                                        </Col>
                                   </Form.Group>
                              </fieldset> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={submitForm}>
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
