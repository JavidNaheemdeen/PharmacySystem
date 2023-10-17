import React from 'react'
import { useContext, useRef } from "react";
// import { Context } from "../context/Context";
import axios from "axios";
// import "../style.css"

export default function PharmacyReg() {
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
                                <div class="card login-card" style={{ height: '130vh' }}>
                                     <span class=" card-body">
                                          <br />
                                          <span class=" card-title">
                                             Pharmacy Register
                                          </span>
                                          <br /><br />
                                          <span class="card-text">
                                               <form className="loginForm">


                                                    <div class="form group">
                                                         <label for="" > Name </label>
                                                         <input type="username" class="form-control" placeholder="Enter your name" />

                                                    </div>
                                                    <div class="form group">
                                                         <label for="" > Password </label>
                                                         <input type="password" class="form-control" placeholder="Enter your password" />

                                                    </div>
                                                    <div class="form group">
                                                         <label for="" > Company Name </label>
                                                         <input type="password" class="form-control" placeholder="Enter your Company Name" />

                                                    </div>
                                                    <div class="form group">
                                                         <label for="" > Address </label>
                                                         <input type="password" class="form-control" placeholder="Enter your Address" />

                                                    </div>
                                                    <div class="form group">
                                                         <label for="" > Email Address </label>
                                                         <input type="username" class="form-control" placeholder="Enter your email" />

                                                    </div>
                                                    <div class="form group">
                                                         <label for="" > Contact </label>
                                                         <input type="password" class="form-control" placeholder="Enter your Contact" />

                                                    </div>
                                                    <div class="form group">
                                                         <label for="" > Logo </label>
                                                         <input type="file" class="form-control-file" id="profile-picture" name="profile-picture"></input>

                                                    </div>
                                                    {/* <a href=""> Forgot Password</a> */}
                                                    
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
