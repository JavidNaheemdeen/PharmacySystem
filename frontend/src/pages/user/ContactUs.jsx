import React from 'react'
import Header from '../../components/user/Header'
import Footer from '../../components/user/Footer'
// import "../style.css"

export default function ContactUs() {
     return (
          <div>
               <Header />
               <div className="container-fluid">


                    <div className="row bg-image login-image">
                         <div className=" row bg-trans-yellow">

                              <div className="col-md-8 ">

                                   <div className="pic-body">
                                        <br /><br /><br />
                                        <div className="topic">
                                             Reach <span className="blue"> anytime </span>
                                        </div>
                                        <iframe
                                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.70261010188!2d80.43804283533822!3d7.2493023704337745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae314a847d98a41%3A0x4b8862fe2194f28b!2sMawanella!5e0!3m2!1sen!2slk!4v1697376818837!5m2!1sen!2slk"
                                             width="600"
                                             height="400"
                                             style={{  borderRadius: "15px" }}
                                             allowfullscreen=""
                                             loading="lazy"
                                             referrerpolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                   </div>

                              </div>


                              <div className="col-md-4 login-sec">
                                   <div style={{ height: '11vh' }}> </div>
                                   <div className="card login-card">
                                        <span className=" card-body">
                                             <br /><br />
                                             <span className=" card-title">
                                                  Contact Us
                                             </span>
                                             <br /><br />
                                             <span className="card-text">
                                                  <form className="" action="" method="post">


                                                       <div className="form group">
                                                            <label for="" > Email address </label>
                                                            <input type="username" className="form-control" placeholder="name@gmail.com" />

                                                       </div>
                                                       <div className="form group">
                                                            <label for="" > What do you like to know from us? </label>
                                                            <textarea type="password" className="form-control" rows={4} placeholder='Your message.....' />

                                                       </div>
                                                       <br />
                                                       <input type="submit" value="Submit" className="btn btn-curved" role="button" style={{ width: '100%' }} />
                                                  </form>
                                             </span>
                                        </span>
                                   </div>


                              </div>

                         </div>


                    </div>
               </div>
               <Footer />
          </div>
     )
}
