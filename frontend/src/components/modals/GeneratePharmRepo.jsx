import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Row, Form } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

export default function GeneratePharmRepo() {

     const [pharmacy, setPharmacy] = useState([]);
     const [searchTerm, setSearchTerm] = useState("");

     useEffect(() => {
          axios
               .get("http://localhost:3000/api/pharmacy/")
               .then((res) => {
                    setPharmacy(res.data);
               })
               .catch((err) => {
                    console.log(err);
               });
     }, []);

     const filteredPharmacies = pharmacy.filter((pm) =>
          pm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pm.town.toLowerCase().includes(searchTerm.toLowerCase())
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
                              Generate Pharmacy Report
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
                                        PillTrack pharmacy Report
                                   </h2>
                                   <br />
                                   <table className="table">
                                        <thead className="thead-dark">
                                             <tr>
                                                  <th scope="col">Name</th>
                                                  <th scope="col">Email</th>
                                                  <th scope="col">Address</th>
                                                  <th scope="col">Town</th>
                                                  <th scope="col">Contact number</th>
                                                  <th scope="col">Logo</th>
                                                  <th scope="col">Opening Hour</th>
                                             </tr>
                                        </thead>
                                        <tbody className="tbl-body">
                                             {filteredPharmacies.map((pm) => (
                                                  <tr key={pm._id}>
                                                       <td>{pm.name}</td>
                                                       <td>{pm.email}</td>
                                                       <td>{pm.address}</td>
                                                       <td>{pm.town}</td>
                                                       <td>{pm.contact}</td>
                                                       <td>
                                                            <img
                                                                 src={pm.logo}
                                                                 style={{ width: "50px", height: "50px" }}
                                                            />
                                                       </td>
                                                       <td>{pm.opentime}</td>
                                                  </tr>
                                             ))}
                                        </tbody>
                                   </table>
                                   <div className="mt-3 text-center">
                                        <p className="text-muted">
                                             &copy; {new Date().getFullYear()} PillTrack. All rights
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
