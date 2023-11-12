import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import "../../style.css";
import logo from "../../images/logo.png"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { SlLogout } from 'react-icons/sl';
import Swal from 'sweetalert2';
import axios from "axios";
import ViewAllOrders from "../modals/ViewAllOrders";


export default function Header() {

     const [pharmacy, setPharmacy] = useState([]);
     const [searchTerm, setSearchTerm] = useState("");
     const [filteredPharmacies, setFilteredPharmacies] = useState([]);
     const userId = localStorage.getItem('userId');

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

     // const filteredPharmacies = pharmacy.filter((pm) =>
     //      pm.name.toLowerCase().includes(searchTerm.toLowerCase())
     // );

     useEffect(() => {
          // Filter the list of pharmacies based on the search term
          const filtered = pharmacy.filter((pm) =>
            pm.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredPharmacies(filtered);
        }, [searchTerm, pharmacy]);


     const handleLogout = () => {
          Swal.fire({
               title: "Confirm Log Out",
               text: "Are you sure you want to Log Out?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonText: "Yes",
               cancelButtonText: "No",
          }).then((result) => {
               if (result.isConfirmed) {
                    // Remove the pharmacyId from local storage
                    localStorage.removeItem("userId");

                    // Show a success Swal notification
                    Swal.fire({
                         icon: 'success',
                         title: 'Logout Successful',
                         text: 'You have been successfully logged out.',
                    }).then(() => {
                         // Redirect the user to the login or home page
                         window.location.href = "/";
                    });
               }
          });
     };

     return (
          <div>
               <Navbar
                    variant="dark"
                    bg="dark"
                    expand="lg"
                    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light fixed-top"
               >
                    <Container fluid>
                         <Navbar.Toggle aria-controls="navbar-dark-example" />
                         <a className="brand" href="/">
                              <img src={logo} style={{ width: '140px' }} alt="image" />
                         </a>
                         <ul className="navbar-nav m-auto">
                              <Navbar.Collapse id="navbar-dark-example">
                                   <li className="nav-item active">
                                        <a href="/" className="nav-link">
                                             Home
                                        </a>
                                   </li>
                              </Navbar.Collapse>
                              <Navbar.Collapse id="navbar-dark-example">
                                   <Nav>
                                        <NavDropdown
                                             id="nav-dropdown-dark-example"
                                             title="Pharmacy"
                                             menuVariant="dark"
                                        >
                                             {pharmacy.map((pm) => (
                                             <NavDropdown.Item key={pm._id} href={"/ProductView/" + pm._id}>
                                                  {pm.name}
                                             </NavDropdown.Item>
                                             ))}
                                        </NavDropdown>
                                   </Nav>
                              </Navbar.Collapse>
                              <Navbar.Collapse id="navbar-dark-example">
                                   <li className="nav-item">
                                        <a href="#" className="nav-link">
                                             About Us
                                        </a>
                                   </li>

                              </Navbar.Collapse>


                              <Navbar.Collapse id="navbar-dark-example">
                                   <li className="nav-item">
                                        <a href="/contactus" className="nav-link">
                                             Contact Us
                                        </a>
                                   </li>

                              </Navbar.Collapse>
{/* 
                              <Navbar.Collapse id="navbar-dark-example">
                                   <li className="nav-item">
                                        <input
                                             className="form-control"
                                             type="text"
                                             placeholder="Search"
                                             value={searchTerm}
                                             aria-label="Search"
                                             onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                   </li>
                              </Navbar.Collapse> */}
                         </ul>
                         {/* <div className="me-4">
                              <a href="/ShoppingCart" style={{ fontSize: '25px' }}><AiOutlineShoppingCart /></a>
                         </div> */}

                         <div className="me-3">
                              {userId ? (
                                   <>
                                        {/* <a href="/view" className="btn btn-def me-3">
                                             View Orders
                                        </a> */}
                                        <ViewAllOrders/>
                                        <a href="/ShoppingCart" className="me-3" style={{ fontSize: '25px' }}>
                                             <AiOutlineShoppingCart />
                                        </a>
                                        <a href="/Profile" className="me-3" style={{ fontSize: '25px' }}>
                                             <CgProfile/>
                                        </a>
                                        <a href="#" className="btn btn-def"  onClick={handleLogout}>
                                             <SlLogout /> Logout
                                        </a>
                                   </>
                              ) : (
                                   <>
                                        <a href="/login" className="btn btn-def me-2">
                                             Login
                                        </a>
                                        <a href="/register" className="btn btn-def">
                                             Register
                                        </a>
                                   </>
                              )}
                         </div>
                         {/* <a href="" className="btn btn-def" onClick={handleLogout}>{user && "Log out"}</a> */}
                    </Container>
               </Navbar>
          </div>
     );
}
