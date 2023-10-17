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
// import "./ecommerce-category-product.css";

export default function ProdView() {
     return (
          <div>
               <Header />
               <div>
                    <Header />
                    <br />
                    <MDBContainer fluid className="my-5">
                         <div className="product-container">
                              <MDBRow className="prod-row">
                                   <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                        <MDBCard className="product-card">
                                             <MDBCardImage
                                                  src="https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format"
                                                  position="top"
                                                  alt="img"
                                             />
                                             <MDBCardBody>
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
                                             <MDBCardImage
                                                  src="https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format"
                                                  position="top"
                                                  alt="img"
                                             />
                                             <MDBCardBody>
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
                                        <MDBCard>
                                             <MDBCardImage
                                                  src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                                  position="top"
                                                  alt="Laptop"
                                             />
                                             <MDBCardBody>
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
                                        <MDBCard>
                                             <MDBCardImage
                                                  src="https://www.nepmeds.com.np/public/files/065D27F12C2040B-ZAART-50.jpeg"
                                                  position="top"
                                                  alt="Laptop"
                                             />
                                             <MDBCardBody>
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
                                        <MDBCard>
                                             <MDBCardImage
                                                  src="https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format"
                                                  position="top"
                                                  alt="Laptop"
                                             />
                                             <MDBCardBody>
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
                                        <MDBCard>
                                             <MDBCardImage
                                                  src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                                  position="top"
                                                  alt="Laptop"
                                             />
                                             <MDBCardBody>
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
                                        <MDBCard>
                                             <MDBCardImage
                                                  src="https://www.nepmeds.com.np/public/files/065D27F12C2040B-ZAART-50.jpeg"
                                                  position="top"
                                                  alt="Laptop"
                                             />
                                             <MDBCardBody>
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
                         <MDBRow>
                                   <MDBCol md="8" lg="2" className="product-column mb-4 mb-lg-0">
                                   <MDBCard>
                                        <MDBCardImage
                                             src="https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody>
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
                                   <MDBCard>
                                        <MDBCardImage
                                             src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody>
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
                                   <MDBCard>
                                        <MDBCardImage
                                             src="https://www.nepmeds.com.np/public/files/065D27F12C2040B-ZAART-50.jpeg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody>
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
                                   <MDBCard>
                                        <MDBCardImage
                                             src="https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody>
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
                                   <MDBCard>
                                        <MDBCardImage
                                             src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody>
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
                                   <MDBCard>
                                        <MDBCardImage
                                             src="https://www.nepmeds.com.np/public/files/065D27F12C2040B-ZAART-50.jpeg"
                                             position="top"
                                             alt="Laptop"
                                        />
                                        <MDBCardBody>
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
                              </MDBCol>
                              </MDBRow>

                         </div>
                    </MDBContainer>
                    <Footer />
               </div>
          </div>
     )
}
