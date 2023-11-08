import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import axios from "axios";
import logo from "../../images/logo.png";
// import "../../style.css"
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { MdInventory2 } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import Swal from 'sweetalert2';

export default function SidenavAd() {

  const [pharmacy, setPharmacy] = useState({});

  const pharmacyId = localStorage.getItem("pharmacyId");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/pharmacy/${pharmacyId}`)
      .then((res) => {
        setPharmacy(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleLogout = () => {
    // Remove the pharmacyId from local storage
    localStorage.removeItem("pharmacyId");

    // Show a success Swal notification
    Swal.fire({
      icon: 'success',
      title: 'Logout Successful',
      text: 'You have been successfully logged out.',
    }).then(() => {
      // Redirect the user to the login or home page
      window.location.href = "/Pharmlogin";
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
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <div className="text-center">
          <a className="brand" href="/Admindashboard">
            <img
              src={logo}
              style={{ width: "150px", height: "50px" }}
              alt="image"
            />
          </a>
          <br />
          <br />
        </div>
        <Container fluid>
          <Navbar.Collapse id="navbar-dark-example">
            <div className="navbar-collapse row m-auto ">
              <div className="navbar-nav col-md-10">
                <a
                  href="/Admindashboard"
                  className="nav-item nav-link dash-link active bg-secondary"
                >
                  <FaHome /> Admin Dashboard{" "}
                </a>
                <a
                  href="/Productdashboard"
                  className="nav-item nav-link dash-link"
                >
                  <MdInventory2 /> Product Dashboard{" "}
                </a>
                <a href="/OrderManagement" className="nav-item nav-link dash-link">
                  <AiOutlineShoppingCart /> Order Management{" "}
                </a>
                <a href="/PrescriptionManagement" className="nav-item nav-link dash-link">
                  <AiOutlineShoppingCart /> Prescription Management{" "}
                </a>
                <a href="/Profilead" className="nav-item dash-link nav-link ">
                  {" "}
                  <CgProfile /> Profile
                </a>
                <a href="#" className="nav-item nav-link dash-link">
                  {" "}
                  <FiSettings /> Settings{" "}
                </a>
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
            <h1 className="fredoka"> Hello {pharmacy.name} ! </h1>
          </div>
          <div className="col-md-2 ">
            <br />
            <FaBell />
            &nbsp;
            <a
              href="#"
              className="btn btn-dash d-inline"
              onClick={handleLogout}
            >
              <FaUser /> <span style={{ color: "white" }}>Log out</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
