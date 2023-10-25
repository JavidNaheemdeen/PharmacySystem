import React from 'react'
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
import bug from '../../images/bug.png'
import cog from '../../images/cog.png'
// import "./ecommerce-category-product.css";



export default function ProdView() {
     return (
          <div>
               <Header />
               <div>
                    <Header />
                    <br />
                    <MDBContainer fluid className="product-container my-5">
                         <MDBRow className="prod-row">
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format"
                                             position="top"
                                             alt="img"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            Panadol
                                                       </a>
                                                  </p>
                                             </div>
                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-1" >
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format"
                                             position="top"
                                             alt="img"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            Panadol
                                                       </a>
                                                  </p>
                                             </div>
                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-1" >
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            cetirizine
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://www.nepmeds.com.np/public/files/065D27F12C2040B-ZAART-50.jpeg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            zaart 50
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            Panadol
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            cetirizine
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://www.nepmeds.com.np/public/files/065D27F12C2040B-ZAART-50.jpeg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            zaart 50
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
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
                                                  <br /> <br /> <br />
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
                                                  <br /> <br /> <br />


                                             </div>
                                        </div>

                                   </div>

                              </div>
                         </div>


                         <MDBRow className="prod-row">
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            Panadol
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className=" product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            cetirizine
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://www.nepmeds.com.np/public/files/065D27F12C2040B-ZAART-50.jpeg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            zaart 50
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            Panadol
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            cetirizine
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            cetirizine
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>

                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            cetirizine
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            cetirizine
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            cetirizine
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            cetirizine
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-2">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol>
                              {/* <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard className="product-card">
                                        <MDBCardImage className="prod-img"
                                             src="https://www.nepmeds.com.np/public/files/065D27F12C2040B-ZAART-50.jpeg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody className="card-body">
                                             <div className="d-flex justify-content-between">
                                                  <p className="small">
                                                       <a href="/SingleProdView" className="text-muted">
                                                            zaart 50
                                                       </a>
                                                  </p>
                                             </div>

                                             <div className="d-flex justify-content-between mb-0">
                                                  <h5 className="text-dark mb-0">LKR999</h5>
                                             </div>

                                             <div class="d-flex justify-content-between mb-0">
                                                  <p class="text-muted mb-0">
                                                       Available: <span class="fw-bold">6</span>
                                                  </p>
                                             </div>
                                             <MDBBtn color="danger" className="flex-fill btn-sm ms-1">
                                                  Buy now
                                             </MDBBtn>
                                             <MDBBtn color="primary" className="flex-fill btn-sm ms-1" >
                                                  Add to cart
                                             </MDBBtn>
                                        </MDBCardBody>
                                   </MDBCard>
                              </MDBCol> */}
                         </MDBRow>
                    </MDBContainer>
                    <Footer />
               </div>
          </div>
     )
}
