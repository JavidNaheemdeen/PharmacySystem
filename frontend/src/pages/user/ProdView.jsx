import React, { useEffect, useState } from "react";
import Header from '../../components/user/Header'
import {
     MDBContainer,
     MDBRow,
     MDBCol,
     MDBCard,
     MDBCardBody,
     MDBCardImage,
     MDBIcon,
     MDBBtn,
} from "mdb-react-ui-kit";
import Footer from '../../components/user/Footer';
import { useParams } from "react-router";
import axios from "axios";

export default function ProdView() {

     const params = useParams();
     const [product, setProduct] = useState([]);
     
     const [searchTerm, setSearchTerm] = useState("");
     const pharmacyId = params.id;

     const userId = localStorage.getItem('userId');

     useEffect(() => {
          axios
               .get("http://localhost:3000/api/product/pharmacy/" + pharmacyId)
               .then((res) => {
                    setProduct(res.data);
               })
               .catch((err) => {
                    console.log(err);
               });
     }, []);

     const filteredProducts = product.filter((pr) =>
     pr.productname.toLowerCase().includes(searchTerm.toLowerCase())

);

     return (
          <div>
               <Header />
               <div>
                    <Header />
                    <br />
                    <MDBContainer fluid className="product-container my-5">
                         <br/>
                    <div className="text-center">
                         <input
                         type="text"
                         placeholder="Search by product name"
                         value={searchTerm}
                         onChange={(e) => setSearchTerm(e.target.value)}
                         style={{ width: '50%' }} // Adjust the width as needed
                         />
                    </div>
                         <MDBRow className="prod-row">
                         {filteredProducts.map((pr) => (
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0" key={pr._id}>
                              <a href={"/SingleProdView/" + pr._id} className="text-muted" style={{ textDecoration: 'none' }}>
                                <MDBCard className="product-card">
                                  <MDBCardImage className="prod-img" src={pr.logo} position="top" alt="img" />
                                  <MDBCardBody className="card-body">
                                    <div className="d-flex justify-content-between">
                                      <p className="large black">{pr.productname}</p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-0">
                                      <h5 className="text-dark mb-0">LKR {pr.unitprice}</h5>
                                    </div>
                                    <div class="d-flex justify-content-between mb-0">
                                      <p class="text-muted mb-0 small">
                                        Available: <span class="fw-bold small">{pr.quantity}</span>
                                      </p>
                                    </div>
                                    {userId && (
                                    <MDBBtn color="primary" className="flex-fill ms-1">
                                      Add to cart
                                    </MDBBtn>
                                    )}
                                  </MDBCardBody>
                                </MDBCard>
                              </a>
                            </MDBCol>
                               ))}
                              
                         </MDBRow>
                         <br />

                         <div className="container-fluid">

                              <div className="row text-center ">

                                   <div className="col-md-6 bg-color-whitesmoke ">
                                        <div className="docOrder-image">

                                             <div className="bg-trans">
                                                  <br /> <br /> <br />
                                                  <h1 className="hone white">
                                                       Doctor Prescription
                                                  </h1>
                                                  <br /> <br />
                                                  <p className="prodpara pr-5 pl-5 white">
                                                       Online order
                                                  </p>
                                                  <div className="btn btn-curved">
                                                       Order Now
                                                  </div>
                                                  <br /> <br /> <br /><br />
                                             </div>

                                        </div>
                                   </div>
                                   <div className="col-md-6">

                                        <div className="medShop-image">
                                             <div className="bg-trans">

                                                  <br /> <br /> <br />
                                                  <h1 className="hone white">
                                                       Medical Equipments
                                                  </h1>
                                                  <br /> <br />
                                                  <p className="prodpara pr-5 pl-5 white">
                                                       Deliver services
                                                  </p>
                                                  <div className="btn btn-curved">
                                                       Shop Now
                                                  </div>
                                                  <br /> <br /> <br /><br />


                                             </div>
                                        </div>

                                   </div>

                              </div>
                         </div>

                    </MDBContainer>
                    <Footer />
               </div>
          </div>
     )
}
