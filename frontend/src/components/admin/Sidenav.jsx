import React from 'react'
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import logo from "../../images/logo.png"
// import "../../style.css"
import { FaUser } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { MdInventory2 } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';


export default function Sidenav() {
     return (
          <div>
               <Navbar variant="dark" bg="dark" expand="lg" className='sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg'>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <div className="text-center">
                         <a className="brand" href="/Pharmacydashboard">
                              <img src={logo} style={{ width: '150px', height: '50px' }} alt="image" />
                         </a><br />
                    </div>
                    <Container fluid>
                         <Navbar.Collapse id="navbar-dark-example">
                              <div className="navbar-collapse row m-auto ">
                                   <div className="navbar-nav col-md-10">
                                        <a href="#" className="nav-item dash-link nav-link "> <CgProfile /> Profile</a>
                                        <a href="#" className="nav-item nav-link dash-link active bg-secondary"><MdInventory2 /> Inventory Management </a>
                                        <a href="#" className="nav-item nav-link dash-link"><AiOutlineShoppingCart /> Order Management </a>
                                        <a href="#" className="nav-item nav-link dash-link"> <FiSettings /> Settings  </a>
                                   </div>
                              </div>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
               <div className="container-fluid">


                    <div className="row">
                         <div className="col-md-3">
                              {/* <h1 className="fredoka"> Hello Jhon ! </h1> */}
                         </div>
                         <div className="col-md-7">
                              <br />
                              <h1 className="fredoka"> Hello Admin ! </h1>
                         </div>
                         <div className="col-md-2 " >
                              <br />
                              <FaBell />&nbsp;
                              <a href="#" className="btn btn-dash d-inline "><FaUser /> <span style={{ color: "white" }}>Log out</span></a>
                         </div>

                    </div>
               </div>

          </div>
     )
}


