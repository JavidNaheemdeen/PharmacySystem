import React from 'react'
import "../../style.css"
import pin from '../../images/svg.png'
import bug from '../../images/bug.png'
import cog from '../../images/cog.png'
import Header from '../../components/user/Header'
import Footer from '../../components/user/Footer'
import { FaLocationDot } from 'react-icons/fa6';
import { FcClock } from 'react-icons/fc';

export default function Homepage() {
     return (
          <div>
               <Header />
               <div>
                    <Header />
                    {/* <div className="container"> */}
                    <div className="hpimage" data-setbg="images">
                         <div className="row">
                              <div className="col-6" style={{ padding: '45px' }}>
                                   <br /><br />
                                   <span className="topic">
                                        No more sorting meds, waiting in line, or chasing down refills for <span className="blue" style={{ fontSize: '150px' }}> efficiency</span>
                                   </span>
                              </div>
                              <div className="col-6" style={{ padding: '45px' }}>
                                   <br /><br />
                                   <div className="container" style={{ padding: '10px' }}>
                                        <h2 style={{ fontSize: '30px', fontFamily: 'fredoka one', fontWeight: 'bold' }} >Select Pharmacy</h2>
                                        <input type="text" placeholder="Search by city" style={{ width: '100%', padding: '10px', marginBottom: '3px', borderRadius: '20px' }} />
                                        <ul className="list-group" style={{ height: '400px', overflowY: 'auto' }}>
                                             {/* {pharmacies.map((pharmacy, index) => ( */}
                                             <li className="list-group-item">
                                                  <a href="/ShoppingCart" style={{ textDecoration: 'none', color: 'black' }}>
                                                       <h3>Kiyome Pharmacy</h3>
                                                       <p style={{ position: 'absolute', top: '0', right: '0', margin: '9px', fontSize: '19px' }}><FcClock /> 8.00 AM - 6.00 PM</p>
                                                       <p style={{ fontSize: '19px' }}><FaLocationDot style={{ color: 'blue' }} /> 7C3W+5GX, Rambukkana - Mawanella Rd, Mawanella</p>
                                                  </a>
                                             </li>
                                             <li className="list-group-item">
                                                  <a href="/ShoppingCart" style={{ textDecoration: 'none', color: 'black' }}>
                                                       <h3>Raj Pharmacy</h3>
                                                       <p style={{ position: 'absolute', top: '0', right: '0', margin: '9px', fontSize: '19px' }}><FcClock /> 8.00 AM - 6.00 PM</p>
                                                       <p style={{ fontSize: '19px' }}><FaLocationDot style={{ color: 'blue' }} /> 688 Peradeniya Rd, Kandy 20000</p>
                                                  </a>
                                             </li>
                                             <li className="list-group-item">
                                                  <a href="/ShoppingCart" style={{ textDecoration: 'none', color: 'black' }}>
                                                       <h3>kandy medicals</h3>
                                                       <p style={{ position: 'absolute', top: '0', right: '0', margin: '9px', fontSize: '19px' }}><FcClock /> 8.00 AM - 6.00 PM</p>
                                                       <p style={{ fontSize: '19px' }}><FaLocationDot style={{ color: 'blue' }} />  7C3W+3M4, Mawanella</p>
                                                  </a>
                                             </li>
                                             <li className="list-group-item">
                                                  <a href="/ShoppingCart" style={{ textDecoration: 'none', color: 'black' }}>
                                                       <h3>Lanka Pharmacy</h3>
                                                       <p style={{ position: 'absolute', top: '0', right: '0', margin: '9px', fontSize: '19px' }}><FcClock /> 8.00 AM - 6.00 PM</p>
                                                       <p style={{ fontSize: '19px' }}><FaLocationDot style={{ color: 'blue' }} /> 5H79+WQG, Gampola</p>
                                                  </a>
                                             </li>
                                             <li className="list-group-item">
                                                  <a href="/ShoppingCart" style={{ textDecoration: 'none', color: 'black' }}>
                                                       <h3>Kegalla pharmacy</h3>
                                                       <p style={{ position: 'absolute', top: '0', right: '0', margin: '9px', fontSize: '19px' }}><FcClock /> 8.00 AM - 6.00 PM</p>
                                                       <p style={{ fontSize: '19px' }}><FaLocationDot style={{ color: 'blue' }} /> 119 Colombo - Kandy Rd, Kegalle</p>
                                                  </a>
                                             </li>
                                             <li className="list-group-item">
                                                  <a href="/ShoppingCart" style={{ textDecoration: 'none', color: 'black' }}>
                                                       <h3>University Rajya Osu Sala</h3>
                                                       <p style={{ position: 'absolute', top: '0', right: '0', margin: '9px', fontSize: '19px' }}><FcClock /> 8.00 AM - 6.00 PM</p>
                                                       <p style={{ fontSize: '19px' }}><FaLocationDot style={{ color: 'blue' }} /> 7H9X+4FX, Kandy</p>
                                                  </a>
                                             </li>
                                             <li className="list-group-item">
                                                  <a href="/ShoppingCart" style={{ textDecoration: 'none', color: 'black' }}>
                                                       <h3>Rathna pharmacy-රත්න</h3>
                                                       <p style={{ position: 'absolute', top: '0', right: '0', margin: '9px', fontSize: '19px' }}><FcClock /> 8.00 AM - 6.00 PM</p>
                                                       <p style={{ fontSize: '19px' }}><FaLocationDot style={{ color: 'blue' }} /> 748/B Kandy Rd, Kadugannawa 20300</p>
                                                  </a>
                                             </li>
                                             <li className="list-group-item">
                                                  <a href="/ShoppingCart" style={{ textDecoration: 'none', color: 'black' }}>
                                                       <h3>Discount Pharmacy</h3>
                                                       <p style={{ position: 'absolute', top: '0', right: '0', margin: '9px', fontSize: '19px' }}><FcClock /> 8.00 AM - 6.00 PM</p>
                                                       <p style={{ fontSize: '19px' }}><FaLocationDot style={{ color: 'blue' }} /> 7GCX+87P, Pilimathalawa</p>
                                                  </a>
                                             </li>
                                             {/* ))} */}
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* </div> */}

                    <section className="fdb-block" id="1">
                         <br /><br />
                         <div className="container pt-3">
                              <div className="row align-items-center">
                                   <div className="col-sm-6 side">
                                        <h1>Home delivery</h1>
                                        <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                   </div>
                                   <div className="col-sm-6 text-center">
                                        <img alt="image" className="img-fluid img-side" src={pin} style={{ width: '400px' }} />
                                   </div>
                              </div>
                         </div>
                    </section>


                    <br /> <br /> <br />
                    <div className="container-fluid">

                         <div className="row text-center ">

                              <div className="col-md-6 bg-color-whitesmoke ">
                                   <div className="pay-image">
                                        <br /> <br /> <br />
                                        <h1 className="hone white">
                                             Pay securely
                                        </h1>
                                        <br /> <br />
                                        <p className="pr-5 pl-5 white">
                                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque assumenda excepturi reiciendis. Minima dolor quisquam ad quo facere esse rem maxime aut, dolorum id alias voluptate, at, reprehenderit corporis asperiores.
                                        </p>
                                        <br /> <br /> <br />
                                        <span>
                                             <img src={bug} alt="image" style={{ height: '70px', width: '70px' }} />
                                             {/* <i className="fa fa-bug icon-big-outline border-yellow " aria-hidden="true"></i> */}
                                        </span>
                                        {/* <Icon.Bug/> */}
                                        <br /> <br /> <br /> <br /> <br />
                                   </div>
                              </div>
                              <div className="col-md-6">

                                   <div className="how-image">
                                        <div className="bg-trans">

                                             <br /> <br /> <br />
                                             <h1 className=" font-weight-bold white">
                                                  Wide Range of Assortments
                                             </h1>
                                             <br /> <br />
                                             <p className="text-center pr-5 pl-5 white">
                                                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque assumenda excepturi reiciendis. Minima dolor quisquam ad quo facere esse rem maxime aut, dolorum id alias voluptate, at, reprehenderit corporis asperiores.
                                             </p>
                                             <br /> <br /> <br />
                                             <span>
                                                  <img src={cog} alt="image" style={{ height: '70px', width: '70px' }} />
                                                  {/* <i className="fa fa-cog icon-big-outline border-white black" aria-hidden="true"></i>  */}
                                             </span>

                                             <br /> <br /> <br /> <br /> <br />

                                        </div>
                                   </div>

                              </div>

                         </div>
                    </div>







                    <div className="container-fluid bg-gradient-yellow">
                         <br /> <br />
                         <div className="row">
                              <div className="col-sm-5 m-auto text-center">
                                   <h3>Sign Up today</h3>
                                   <br />
                              </div>
                              <div className="col-sm-7 m-auto text-center">
                                   <form action="/action_page.php" className="form-inline submit-form ">
                                        <input type="email" className="emailform" placeholder="john@gmail.com" value="" />
                                        <input type="button" class=" btn btn-def1" value="Submit" />
                                   </form>
                              </div>
                         </div>
                         <br />
                    </div>
                    <Footer />

               </div>
          </div>
     )
}
