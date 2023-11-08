import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router";
import axios from "axios";

export default function SingleProdView() {

     const params = useParams();
     const [product, setProduct] = useState([]);

     const productId = params.id;

     const userId = localStorage.getItem('userId');

     useEffect(() => {
          axios
               .get("http://localhost:3000/api/product/" + productId)
               .then((res) => {
                    setProduct(res.data);
               })
               .catch((err) => {
                    console.log(err);
               });
     }, []);

     return (
          <div>
               <Header />
               <div>
                    <Header />
                    <br />
                    <MDBContainer fluid>
                         <br/>
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
                                                                 src={product.logo}
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
                                                       <h5>{product.productname}</h5>
                                                       <div className="d-flex flex-row align-items-center mb-1">
                                                            <h4 className="mb-1 me-1">LKR {product.unitprice}</h4>
                                                       </div>
                                                       <div class="d-flex flex-row align-items-right">
                                                       Quantity : 
                                                            <MDBInput
                                                                 min={0}
                                                                 type="number"
                                                                 size="sm"
                                                                 style={{ width: "50px" }}
                                                                 defaultValue={2}
                                                            />
                                                            {/* <AiOutlineShoppingCart /> */}
                                                       </div>
                                                       {userId && (
                                                       <div className="d-flex flex-column mt-4">
                                                            <MDBBtn color="primary" size="sm">
                                                                 Add to Cart
                                                            </MDBBtn>
                                                       </div>
                                                        )}
                                                  </MDBCol>
                                             </MDBRow>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                         </MDBRow>
                    </MDBContainer>
                    <br/>
                    <Footer />
               </div>
          </div>
     )
}
