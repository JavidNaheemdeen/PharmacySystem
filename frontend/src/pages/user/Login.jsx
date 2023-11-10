import React, { useState, useEffect } from 'react';
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
// import "../style.css"
import Swal from 'sweetalert2';

export default function Login() {


     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const navigate = useNavigate();

     useEffect(() => {
          // Check if the user is already logged in (e.g., check if a token or user data exists in local storage)
          const userId = localStorage.getItem('userId');
          if (userId) {
               navigate('/Userdashboard'); // Redirect to the user dashboard if already logged in
          }
     }, [navigate]);

     const handleLogin = async (e) => {
          e.preventDefault();

          try {
               const response = await fetch('http://localhost:3000/api/user/authenticate', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
               });

               if (response.status === 200) {
                    // Authentication successful, get the user _id from the response (assuming your API returns the _id)
                    const data = await response.json();
                    const userId = data._id;

                    // Store the user _id in local storage
                    localStorage.setItem('userId', userId);

                    // Show a success Swal notification
                    Swal.fire({
                         icon: 'success',
                         title: 'Login Successful',
                         text: 'You have been successfully logged in.',
                    }).then(() => {
                         // Redirect to the user dashboard
                         navigate('/');
                    });
               } else {
                    // Authentication failed, show an error Swal notification
                    Swal.fire({
                         icon: 'error',
                         title: 'Login Failed',
                         text: 'Authentication error. Please check your credentials and try again.',
                    });
               }
          } catch (error) {
               console.error('API call error', error);
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
                                        <a href="/register" className="btn btn-def" style={{ fontSize: "20px", textDecoration: "none" }}>Register</a>
                                        <br /><br /><br /><br /><br /><br />
                                        <div class="topic">
                                             Simplify your <span class="blue"> life </span>
                                        </div>
                                   </div>

                              </div>


                              <div class="col-md-4 login-sec">
                                   <div style={{ height: '11vh' }}> </div>
                                   <div class="card login-card">
                                        <span class=" card-body">
                                             <br /><br />
                                             <span class=" card-title">
                                                  Log In
                                             </span>
                                             <br /><br />
                                             <span class="card-text">
                                                  <form className="loginForm" >


                                                       <div class="form group">
                                                            <label for="" > Email </label>
                                                            <input type="username" class="form-control" placeholder="Enter your username"
                                                                 value={email}
                                                                 onChange={(e) => setEmail(e.target.value)}/>

                                                       </div>
                                                       <div class="form group">
                                                            <label for="" > Password </label>
                                                            <input type="password" class="form-control" placeholder="Enter your password"
                                                                 value={password}
                                                                 onChange={(e) => setPassword(e.target.value)}/>

                                                       </div>
                                                       <a href=""> Forgot Password</a>
                                                       <br /> 
                                                       <br />
                                                       <a href="/Pharmlogin"> Login as a Pharmacist</a>
                                                       <br />
                                                       <br />
                                                       <input type="submit" value="Login" class="btn btn-curved" role="button" style={{ width: '100%' }} onClick={handleLogin} />

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
