import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Row, Form } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

export default function GeneratePrescrRepo() {

     const [pharmacy, setPharmacy] = useState([]);
     const [prescription, setPrescription] = useState([]);
     const [searchTerm, setSearchTerm] = useState("");

     const pharmacyId = localStorage.getItem('pharmacyId');

     useEffect(() => {
          axios
               .get("http://localhost:3000/api/prescription/pharmacy/" + pharmacyId)
               .then((res) => {
                    setPrescription(res.data);
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

     const filteredPrescriptions = prescription.filter((pr) =>
          pr.patientname.toLowerCase().includes(searchTerm.toLowerCase())
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
               <Button className="btn btn-curved me-3" onClick={handleShow}>
                    Report
               </Button>

               <Modal show={show} size="lg" centered>
                    <Modal.Header>
                         <Modal.Title id="contained-modal-title-vcenter">
                              Generate Prescription Report
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
                                        Prescriptions available for {pharmacy.name} pharmacy
                                   </h2>
                                   <br />
                                   <table className="table">
                                        <thead className="thead-dark">
                                             <tr>
                                                  <th scope="col">Patient Name</th>
                                                  <th scope="col">Age</th>
                                                  <th scope="col">Contact</th>
                                                  <th scope="col">Address</th>
                                                  <th scope="col">Gender</th>
                                                  <th scope="col">Allergy</th>
                                             </tr>
                                        </thead>
                                        <tbody className="tbl-body">
                                             {filteredPrescriptions.map((pr) => (
                                                  <tr key={pr._id}>
                                                       <td>{pr.patientname}</td>
                                                       <td>{pr.age}</td>
                                                       <td>{pr.yourphone}</td>
                                                       <td>{pr.address}</td>
                                                       <td>{pr.gender}</td>
                                                       <td>{pr.allergy}</td>
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
     )
}
