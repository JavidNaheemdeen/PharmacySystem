import React from 'react'

export default function PharmLogin() {
  return (
      <div>
      <div class="container-fluid">


           <div class="row bg-image login-image">
                <div class=" row bg-trans-yellow">

                     <div class="col-md-8 ">

                          <div class="pic-body">
                               <br /><br /><br /><br /><br /><br /><br /><br /><br />
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
                                         Log In As A Pharmacist
                                    </span>
                                    <br /><br />
                                    <span class="card-text">
                                         <form className="loginForm">


                                              <div class="form group">
                                                   <label for="" > Username </label>
                                                   <input type="username" class="form-control" placeholder="Enter your username" />

                                              </div>
                                              <div class="form group">
                                                   <label for="" > Password </label>
                                                   <input type="password" class="form-control" placeholder="Enter your password" />

                                              </div>
                                              <a href=""> Forgot Password</a>
                                              <br /> 
                                              <a href="/login"> Login as a User</a>
                                              <br />
                                              <input type="submit" value="Login" class="btn btn-curved" role="button" style={{ width: '100%' }} />

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
