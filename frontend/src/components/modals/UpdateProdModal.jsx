import React from 'react'
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Swal from "sweetalert2";
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export default function UpdateProdModal(props) {
  const [show, setShow] = useState(false);

  const [productId, setProductId] = useState("");
  const [productname, setProductname] = useState("");
  const [genericname, setGenericname] = useState("");
  const [form, setForm] = useState("");
  const [batchnumber, setBatchnumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitprice, setUnitprice] = useState("");
  const [logo, setLogo] = useState("");
  const [pharmacyId, setPharmacyId] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const productData = {
    productname,
    genericname,
    form,
    batchnumber,
    quantity,
    unitprice,
    logo,
    pharmacyId,
  };

  const handleImageChange = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const file = e.target.files[0];

      if (!file) return alert("File does not exist.");

      if (file.size > 1024 * 1024) // 1MB
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

  const updateShow = () => {
    console.log(props.productId);
    setProductId(props.productId);
    
    axios
      .get("http://localhost:3000/api/product/" + props.productId)
      .then(function (response) {
        setProductname(response.data["productname"]);
        setGenericname(response.data["genericname"]);
        setForm(response.data["form"]);
        setBatchnumber(response.data["batchnumber"]);
        setQuantity(response.data["quantity"]);
        setUnitprice(response.data["unitprice"]);
        setLogo(response.data["logo"]);
        setPharmacyId(response.data["pharmacyId"])
        setShow(true);
      })
      .catch(function (error) {
        console.log(error);
        alert("Invalid");
      });
  };


  function submitForm(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:3000/api/product/updateproduct/" + props.productId,
        productData
      )
      .then(function (response) {
        setProductname("");
        setGenericname("");
        setForm("");
        setBatchnumber("");
        setQuantity("");
        setUnitprice("");
        setLogo("");
        setPharmacyId("");
        setShow(false);
        Swal.fire({
          title: "Success!",
          text: "Product updated Successfully",
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
      <Button className="btn btn-success btn-sm me-1" onClick={updateShow}>
        <BsFillPencilFill/>
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Product
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
                  <Form.Label>Product Name:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={productname}
                    onChange={(e) => {
                      setProductname(e.target.value);
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
                  <Form.Label>Generic Name:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={genericname}
                    onChange={(e) => {
                      setGenericname(e.target.value);
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
                  <Form.Label>Form:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={form}
                    onChange={(e) => {
                      setForm(e.target.value);
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
                  <Form.Label>Batch Number:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={batchnumber}
                    onChange={(e) => {
                      setBatchnumber(e.target.value);
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
                  <Form.Label>Quantity:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
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
                  <Form.Label>Unit Price:</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={unitprice}
                    onChange={(e) => {
                      setUnitprice(e.target.value);
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
                {logo && (
                  <img
                    src={logo}
                    style={{ width: "75px", height: "50px" }}
                    alt="Product Logo"
                  />
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
  )
}
