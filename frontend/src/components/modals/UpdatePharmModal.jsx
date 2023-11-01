import React from "react";
import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";

export default function UpdatePharmModal(props) {
  const [show, setShow] = useState(false);

  const [pharmacyid, setPharmacyId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [contact, setContact] = useState("");
  const [logo, setLogo] = useState(""); // Store the image URL here
  const [opentime, setOpentime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const pharmData = {
    name,
    email,
    address,
    town,
    contact,
    logo, // Include the logo URL
    opentime,
  };

  const handleImageChange = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const file = e.target.files[0];

      if (!file) return alert("File does not exist.");

      if (file.size > 1024 * 1024)
        // 1MB
        return alert("Size is too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ml_default");
      formData.append("cloud_name", "dswsu55n9");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dswsu55n9/image/upload",
        formData,
        {
          method: "post",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data.url);
      setLogo(res.data.url); // Set the image URL in the state
      setIsLoading(false);
    } catch (err) {
      console.log(err.response.data.msg);
      setIsLoading(false);
      console.log("Not uploaded");
    }
  };

  const UpdateShow = () => {
    console.log(props.pmid);
    setPharmacyId(props.pmid);
    axios
      .get("http://localhost:3000/api/pharmacy/" + props.pmid)
      .then(function (response) {
        setName(response.data["name"]);
        setEmail(response.data["email"]);
        setAddress(response.data["address"]);
        setTown(response.data["town"]);
        setContact(response.data["contact"]);
        setLogo(response.data["logo"]);
        setOpentime(response.data["opentime"]);
        setShow(true);
      })
      .catch(function (error) {
        console.log(error);
        alert("invalid");
      });
  };

  function submitForm(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:3000/api/pharmacy/updatepharmacy/" + props.pmid,
        pharmData
      )
      .then(function (response) {
        setName("");
        setEmail("");
        setAddress("");
        setTown("");
        setContact("");
        setLogo("");
        setOpentime("");
        setShow(false);
        Swal.fire({
          title: "Success!",
          text: "Pharmacy updated Successfully",
          icon: "success",
          confirmButtonText: "Ok",
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
      <Button className="btn btn-success btn-sm mb-1" onClick={UpdateShow}>
        Update
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Pharmacy
          </Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <fieldset>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
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
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
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

            <fieldset>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Col sm={2}>
                  <Form.Label>Address</Form.Label>
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
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Col sm={2}>
                  <Form.Label>Town</Form.Label>
                </Col>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    value={town}
                    onChange={(e) => {
                      setTown(e.target.value);
                    }}
                  />
                </Col>
                <Col sm={2}>
                  <Form.Label>Contact No.</Form.Label>
                </Col>
                <Col sm={4}>
                  <Form.Control
                    type="tel"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Col sm={2}>
                  <Form.Label>Opening Time:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="time"
                    value={opentime}
                    onChange={(e) => {
                      setOpentime(e.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Col sm={2}>
                  <Form.Label>Logo:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="file"
                    //   value={logo}
                    onChange={handleImageChange}
                  />
                </Col>
                {logo && ( // Conditionally render the image if logo is not empty
                  <img src={logo} style={{ width: "75px", height:"50px" }} alt="Pharmacy Logo" />
                )}
              </Form.Group>
            </fieldset>
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
  );
}
