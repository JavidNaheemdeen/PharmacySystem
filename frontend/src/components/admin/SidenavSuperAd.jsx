import React, { useEffect, useState } from 'react';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import logo from "../../images/logo.png"
import { FiSettings } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { MdLocalPharmacy } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';



export default function SidenavSuperAd() {

     const [superadmin, setSuperadmin] = useState({});

     const superadminId = localStorage.getItem("superadminId");

     useEffect(() => {
          axios
               .get(`http://localhost:3000/api/superadmin/${superadminId}`)
               .then((res) => {
                    setSuperadmin(res.data);
               })
               .catch((err) => {
                    console.log(err);
               });
     }, []);

     const handleLogout = () => {
          // Remove the superadminId from local storage
          localStorage.removeItem('superadminId');

          // Show a success Swal notification
          Swal.fire({
               icon: 'success',
               title: 'Logout Successful',
               text: 'You have been successfully logged out.',
          }).then(() => {
               // Redirect the user to the login or home page
               window.location.href = '/Adminlogin';
          });
     };

     return (
          <div>
               <Navbar
                    variant="dark"
                    bg="dark"
                    expand="lg"
                    className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg"
               >
                    <div className="text-center">
                         <a className="brand" href="/Supadmindashboard">
                              <img
                                   src={logo}
                                   style={{ width: '150px', height: '50px' }}
                                   alt="image"
                              />
                         </a>
                         <br />
                         <br />
                    </div>
                    <Container fluid>
                         <div className="navbar-collapse row m-auto">
                              <div className="navbar-nav col-md-10">
                                   <a
                                        href="/Supadmindashboard"
                                        className="nav-item dash-link nav-link active bg-secondary"
                                   >
                                        <FaHome /> Super Admin Dashboard
                                   </a>
                                   <a href="/Pharmacydashboard" className="nav-item nav-link dash-link">
                                        <MdLocalPharmacy /> Pharmacy Dashboard
                                   </a>
                                   <a href="/Userdashboard" className="nav-item nav-link dash-link">
                                        <CgProfile /> User Dashboard
                                   </a>
                              </div>
                         </div>
                    </Container>
               </Navbar>
               <div className="container-fluid">
                    <div className="row">
                         <div className="col-md-3">
                              {/* Content */}
                         </div>
                         <div className="col-md-7">
                              <br />
                              <h1 className="fredoka">Hello {superadmin.name} !</h1>
                         </div>
                         <div className="col-md-2">
                              <br />
                              <FaBell />
                              &nbsp;
                              <a href="#" className="btn btn-dash d-inline" onClick={handleLogout}>
                                   <FaUser /> <span style={{ color: 'white' }}>Log out</span>
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     )
}
