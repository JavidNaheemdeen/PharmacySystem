import React, { useState } from 'react';
import { useContext, useRef } from "react";
// import { Context } from "../context/Context";
import axios from "axios";
import Swal from 'sweetalert2';
// import "../style.css"


export default function Register() {

     const [name, setName] = useState('');
     const [address, setAddress] = useState('');
     const [contact, setContact] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');


     const handleSubmit = (e) => {
          e.preventDefault();

          if (
               name.length === 0 ||
               email.length === 0 ||
               address.length === 0 ||
               contact.length === 0 ||
               password.length === 0
          ) {
               Swal.fire({
                    title: "Fields Cannot be empty!",
                    text: "Please enter all data!",
                    icon: "error",
                    confirmButtonText: "Ok",
               });
          } else {
               const userData = {
                    name,
                    address,
                    contact,
                    email,
                    password,
               };

               axios
                    .post(`http://localhost:3000/api/user/adduser`, userData)
                    .then(function (res) {
                         setName("");
                         setAddress("");
                         setContact("");
                         setEmail("");
                         setPassword("");
                         Swal.fire({
                              title: "Success!",
                              text: "Successfully registered as a User",
                              icon: "success",
                              confirmButtonText: "Ok",
                         }).then((result) => {
                              if (result.isConfirmed) {
                                   window.location.href = '/login';
                              }
                         });
                    })
                    .catch(function (error) {
                         console.log(error);
                         Swal.fire({
                              title: "Failed!",
                              text: "Registering Unsuccessful",
                              icon: "error",
                              confirmButtonText: "Ok",
                         });
                    });
          }
     };

     return (
          <div>
               <div class="container-fluid">


                    <div class="row bg-image login-image">
                         <div class=" row bg-trans-yellow">

                              <div class="col-md-8 ">

                                   <div class="pic-body">
                                        <br /><br />
                                        <a href="/" className="btn btn-def me-1" style={{ fontSize: "20px", textDecoration: "none" }}>Home</a>
                                        <a href="/login" className="btn btn-def" style={{ fontSize: "20px", textDecoration: "none" }}>Login</a>
                                        <br /><br /><br /><br /><br /><br /><br />
                                        <div class="topic">
                                             Switch to a simpler <span class="blue"> pharmacy </span> today
                                        </div>
                                   </div>

                              </div>


                              <div class="col-md-4 login-sec">
                                   <div style={{ height: '11vh' }}> </div>
                                   <div class="card login-card">
                                        <span class=" card-body">
                                             <br />
                                             <span class=" card-title">
                                                  Register
                                             </span>
                                             <br />
                                             <span class="card-text">
                                                  <form className="loginForm" onSubmit={handleSubmit}>


                                                       <div class="form group">
                                                            <label for="" > Name </label>
                                                            <input type="text" class="form-control" placeholder="Enter your name"
                                                                 value={name}
                                                                 onChange={(e) => setName(e.target.value)} />

                                                       </div>
                                                       <div class="form group">
                                                            <label for="" > Address </label>
                                                            <input type="text" class="form-control" placeholder="Enter your address"
                                                                 value={address}
                                                                 onChange={(e) => setAddress(e.target.value)} />

                                                       </div>
                                                       <div class="form group">
                                                            <label for="" > Contact No. </label>
                                                            <input type="text" class="form-control" placeholder="Enter your email"
                                                                 value={contact}
                                                                 onChange={(e) => setContact(e.target.value)} />

                                                       </div>
                                                       <div class="form group">
                                                            <label for="" > Email Address </label>
                                                            <input type="text" class="form-control" placeholder="Enter your email"
                                                                 value={email}
                                                                 onChange={(e) => setEmail(e.target.value)} />

                                                       </div>
                                                       <div class="form group">
                                                            <label for="" > Password </label>
                                                            <input type="password" class="form-control" placeholder="Enter your password"
                                                                 value={password}
                                                                 onChange={(e) => setPassword(e.target.value)} />

                                                       </div>
                                                       {/* <a href=""> Forgot Password</a> */}
                                                       <a href="/Pharmacist"> Register As Pharmacist</a>
                                                       <br /> <br />
                                                       <input type="submit" value="Register" class="btn btn-curved" role="button" style={{ width: '100%' }} />

                                                  </form>
                                             </span>
                                        </span>
                                   </div>
                              </div>

                         </div>


                    </div>
               </div>

          </div>
     )
}
