import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Row, Form } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

export default function GeneratProReport() {
  const [products, setProducts] = useState([]);
  const [pharmacy, setPharmacy] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const pharmacyId = localStorage.getItem("pharmacyId");

  useEffect(() => {
    // Check if the user is already logged in (e.g., check if a token or user data exists in local storage)
    const pharmacyId = localStorage.getItem("pharmacyId");
    if (!pharmacyId) {
      navigate("/Pharmlogin"); // Redirect to the dashboard if logged in
    }
  }, [navigate]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/product/pharmacy/" + pharmacyId)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/pharmacy/" + pharmacyId)
      .then((res) => {
        setPharmacy(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredProducts = products.filter((pr) =>
    pr.productname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Button className="btn btn-def me-3" onClick={handleShow}>
        Report
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Generate Product Report
          </Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <div className="text-center">
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <br />
            <div ref={componentRef}>
              <br />
              <h2 className="text-center">
                Products available for {pharmacy.name} pharmacy
              </h2>
              <br />
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Generic Name</th>
                    <th scope="col">Form </th>
                    <th scope="col">Batch Number</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Image</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((pr) => (
                    <tr key={pr._id}>
                      <td>{pr.productname}</td>
                      <td>{pr.genericname}</td>
                      <td>{pr.form}</td>
                      <td>{pr.batchnumber}</td>
                      <td>{pr.quantity}</td>
                      <td>{pr.unitprice}</td>
                      <td>
                        <img
                          src={pr.logo}
                          style={{ width: "50px", height: "50px" }}
                          alt="Product Logo"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-3 text-center">
              <p className="text-muted">
                &copy; {new Date().getFullYear()} {pharmacy.name}. All rights
                reserved.
              </p>
            </div>
            </div>
            <div className="float-right ml-auto">
              <Button variant="success" onClick={handlePrint}>
                Print Report
              </Button>
            </div>
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
