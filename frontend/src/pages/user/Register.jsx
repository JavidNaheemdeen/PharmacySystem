import React from 'react'
import { useContext, useRef } from "react";
// import { Context } from "../context/Context";
import axios from "axios";
// import "../style.css"


export default function Register() {
     return (
          <div>
               <div class="container-fluid">


                    <div class="row bg-image login-image">
                         <div class=" row bg-trans-yellow">

                              <div class="col-md-8 ">

                                   <div class="pic-body">
                                        <br /><br /><br /><br /><br /><br /><br /><br /><br />
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
                                             <br /><br />
                                             <span class="card-text">
                                                  <form className="loginForm">


                                                       <div class="form group">
                                                            <label for="" > Name </label>
                                                            <input type="username" class="form-control" placeholder="Enter your name" />

                                                       </div>
                                                       <div class="form group">
                                                            <label for="" > Email Address </label>
                                                            <input type="username" class="form-control" placeholder="Enter your email" />

                                                       </div>
                                                       <div class="form group">
                                                            <label for="" > Password </label>
                                                            <input type="password" class="form-control" placeholder="Enter your password" />

                                                       </div>
                                                       <div class="form group">
                                                            <label for="" > Confirm Password </label>
                                                            <input type="password" class="form-control" placeholder="Enter your confirm password" />

                                                       </div>
                                                       {/* <a href=""> Forgot Password</a> */}
                                                       <a href="/Pharmacist"> Register As Pharmacist</a> <br />
                                                       <a href="/SuperAdmin"> Register As SuperAdmin</a>
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
