import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddProdModal() {
  const [show, setShow] = useState(false);
  const [productname, setProductname] = useState("");
  const [genericname, setGenericname] = useState("");
  const [form, setForm] = useState("");
  const [batchnumber, setBatchnumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitprice, setUnitprice] = useState("");
  const [logo, setLogo] = useState("");
  // const [pharmacyId, setPharmacyId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const pharmacyId = localStorage.getItem("pharmacyId");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      productname.length === 0 ||
      genericname.length === 0 ||
      form.length === 0 ||
      batchnumber.length === 0 ||
      quantity.length === 0 ||
      unitprice.length === 0 ||
      logo.length === 0
    ) {
      Swal.fire({
        title: "Fields Cannot be empty!",
        text: "Please enter all data!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      const prodData = {
        productname,
        genericname,
        form,
        batchnumber,
        quantity,
        unitprice,
        logo,
        pharmacyId,// Include the logo URL
      };

      axios
        .post(`http://localhost:3000/api/product/addproduct`, prodData)
        .then(function (res) {
          setProductname("");
          setGenericname("");
          setForm("");
          setBatchnumber("");
          setQuantity("");
          setUnitprice("");
          setLogo("");
          Swal.fire({
            title: "Success!",
            text: "Product Successfully Added",
            icon: "success",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/Productdashboard';
            }
          });
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire({
            title: "Failed!",
            text: "Product Adding Unsuccessful",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }
  };



  return (
    <>
      <Button className="btn btn-primary btn-lg" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Add Product</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>Product Name:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setProductname(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>Generic Name:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setGenericname(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>Form:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setForm(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>Batch Number:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setBatchnumber(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>Quantity:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>Unit Price:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setUnitprice(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>Image:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="file"
                    onChange={handleImageChange}
                  />
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
  );
}
