import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import "../../style.css";
import logo from "../../images/logo.png"
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { Context } from '../context/Context';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Swal from 'sweetalert2';


export default function Header() {

     const userId = localStorage.getItem('userId');

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
                                             <NavDropdown.Item href="/ProductView">Cure ME</NavDropdown.Item>
                                             <NavDropdown.Item href="#action/3.2">Kandy Pharmacy</NavDropdown.Item>
                                             <NavDropdown.Item href="#action/3.3">Raj Medicals</NavDropdown.Item>
                                             <NavDropdown.Item href="#action/3.4">Lanka Pharmacy</NavDropdown.Item>
                                        </NavDropdown>
                                   </Nav>
                              </Navbar.Collapse>
                              {/* <Navbar.Collapse id="navbar-dark-example">
                                   <Nav>
                                        <NavDropdown
                                             id="nav-dropdown-dark-example"
                                             title="Pharmacy"
                                             menuVariant="dark"
                                        >
                                             <NavDropdown.Item href="/ProductView">Cure ME</NavDropdown.Item>
                                             <NavDropdown.Item href="#">
                                                  Kandy Pharmacy
                                             </NavDropdown.Item>
                                             <NavDropdown.Item href="#">
                                                  Raj Medicals
                                             </NavDropdown.Item>
                                             <NavDropdown.Item href="#">
                                                  Lanka Pharmacy
                                             </NavDropdown.Item>
                                        </NavDropdown>
                                   </Nav>
                              </Navbar.Collapse> */}
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

                              <Navbar.Collapse id="navbar-dark-example">
                                   <li className="nav-item">
                                        <input
                                             className="form-control"
                                             type="text"
                                             placeholder="Search"
                                             aria-label="Search"
                                        />
                                   </li>
                              </Navbar.Collapse>
                         </ul>
                         {/* <div className="me-4">
                              <a href="/ShoppingCart" style={{ fontSize: '25px' }}><AiOutlineShoppingCart /></a>
                         </div> */}

                         <div className="me-3">
                              {userId ? (
                                   <>
                                        <a href="/profile" className="btn btn-def">
                                             Profile
                                        </a>
                                        <a href="#" className="btn btn-def" onClick={handleLogout}>
                                             Logout
                                        </a>
                                   </>
                              ) : (
                                   <>
                                        <a href="/login" className="btn btn-def">
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
