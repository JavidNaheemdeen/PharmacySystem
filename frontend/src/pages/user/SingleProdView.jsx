import React from 'react'
import Header from '../../components/user/Header'
import {
     MDBContainer,
     MDBRow,
     MDBCol,
     MDBCard,
     MDBCardBody,
     MDBCardImage,
     MDBInput,
     MDBIcon,
     MDBRipple,
     MDBBtn,
} from "mdb-react-ui-kit";
import Footer from '../../components/user/Footer';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'

export default function SingleProdView() {
     return (
          <div>
               <Header />
               <div>
                    <Header />
                    <br />
                    <MDBContainer fluid>
                         <MDBRow className="justify-content-center mb-0">
                              <MDBCol md="12" xl="10">
                                   <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                                        <MDBCardBody>
                                             <MDBRow>
                                                  <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                                       <MDBRipple
                                                            rippleColor="light"
                                                            rippleTag="div"
                                                            className="bg-image rounded hover-zoom hover-overlay"
                                                       >
                                                            <MDBCardImage
                                                                 src="https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format"
                                                                 fluid
                                                                 className="w-100"
                                                            />
                                                            <a href="#!">
                                                                 <div
                                                                      className="mask"
                                                                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                                 ></div>
                                                            </a>
                                                       </MDBRipple>
                                                  </MDBCol>
                                                  <MDBCol md="6">
                                                       <h5>Panadol</h5>
                                                       <div className="d-flex flex-row align-items-center mb-1">
                                                            <h4 className="mb-1 me-1">LKR13.99</h4>
                                                       </div>
                                                       <p className="text-truncate mb-4 mb-md-0">
                                                            There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have suffered alteration in some
                                                            form, by injected humour, or randomised words which don't
                                                            look even slightly believable.
                                                       </p>
                                                       <div class="d-flex flex-row align-items-right">
                                                            <MDBBtn className="px-2" color="link">
                                                                 <MDBIcon fa icon="minus" /><FaMinus />
                                                            </MDBBtn>

                                                            <MDBInput
                                                                 min={0}
                                                                 type="number"
                                                                 size="sm"
                                                                 style={{ width: "50px" }}
                                                                 defaultValue={2}
                                                            />
                                                            
                                                            <MDBBtn className="px-2" color="link">
                                                                 <MDBIcon fa icon="plus" /><FaPlus />
                                                            </MDBBtn>
                                                            {/* <AiOutlineShoppingCart /> */}
                                                       </div>
                                                       <div className="d-flex flex-column mt-4">
                                                            <MDBBtn color="primary" size="sm">
                                                                 Add to Cart
                                                            </MDBBtn>
                                                       </div>
                                                  </MDBCol>
                                             </MDBRow>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                         </MDBRow>
                    </MDBContainer>
                    <Footer />
               </div>
          </div>
     )
}
