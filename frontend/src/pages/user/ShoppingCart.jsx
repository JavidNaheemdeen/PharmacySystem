import React from 'react'
import {
     MDBBtn,
     MDBCard,
     MDBCardBody,
     MDBCol,
     MDBContainer,
     MDBIcon,
     MDBInput,
     MDBRadio,
     MDBRow,
     MDBTable,
     MDBTableBody,
     MDBTableHead,
} from "mdb-react-ui-kit";
import Header from '../../components/user/Header';
import Footer from '../../components/user/Footer';

export default function ShoppingCart() {
     return (
          <div>
               <Header />
               <br />
               <section className="h-100 h-custom" style={{ backgroundColor: " #eee" }}>
                    <MDBContainer className="py-5 h-100">
                         <MDBRow className="justify-content-center align-items-center h-100">
                              <MDBCol>
                                   <MDBTable responsive>
                                        <MDBTableHead>
                                             <tr>
                                                  <th scope="col" className="h5">
                                                       Product
                                                  </th>
                                                  <th scope="col">Quantity</th>
                                                  <th scope="col">Unit Price</th>
                                                  <th scope="col">Price</th>
                                             </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                             <tr>
                                                  <th scope="row">
                                                       <div className="d-flex align-items-center">
                                                            <img
                                                                 src="https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format"
                                                                 fluid
                                                                 className="rounded-3"
                                                                 style={{ width: "120px" }}
                                                                 alt="Book"
                                                            />
                                                            <div className="flex-column ms-4">
                                                                 <p className="mb-2">Panadol</p>
                                                            </div>
                                                       </div>
                                                  </th>
                                                  <td className="align-middle">
                                                       <div class="d-flex flex-row align-items-center">
                                                            <MDBBtn className="px-2" color="link">
                                                                 <MDBIcon fas icon="minus" />
                                                            </MDBBtn>

                                                            <MDBInput
                                                                 min={0}
                                                                 type="number"
                                                                 size="sm"
                                                                 style={{ width: "50px" }}
                                                                 defaultValue={2}
                                                            />

                                                            <MDBBtn className="px-2" color="link">
                                                                 <MDBIcon fas icon="plus" />
                                                            </MDBBtn>
                                                       </div>
                                                  </td>
                                                  <td className="align-middle">
                                                       <p className="mb-0" style={{ fontWeight: "600" }}>
                                                            LK R3.00
                                                       </p>
                                                  </td>

                                                  <td className="align-middle">
                                                       <p className="mb-0" style={{ fontWeight: "600" }}>
                                                            LK R9.99
                                                       </p>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <th scope="row">
                                                       <div className="d-flex align-items-center">
                                                            <img
                                                                 src="https://m.media-amazon.com/images/I/91v4-3E3AlL._AC_UF1000,1000_QL80_.jpg"
                                                                 fluid
                                                                 className="rounded-3"
                                                                 style={{ width: "120px" }}
                                                                 alt="Book"
                                                            />
                                                            <div className="flex-column ms-4">
                                                                 <p className="mb-2">
                                                                      Cetrizine
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </th>
                                                  <td className="align-middle">
                                                       <div class="d-flex flex-row align-items-center">
                                                            <MDBBtn className="px-2" color="link">
                                                                 <MDBIcon fas icon="minus" />
                                                            </MDBBtn>

                                                            <MDBInput
                                                                 min={0}
                                                                 type="number"
                                                                 size="sm"
                                                                 style={{ width: "50px" }}
                                                                 defaultValue={1}
                                                            />

                                                            <MDBBtn className="px-2" color="link">
                                                                 <MDBIcon fas icon="plus" />
                                                            </MDBBtn>
                                                       </div>
                                                  </td>
                                                  <td className="align-middle">
                                                       <p className="mb-0" style={{ fontWeight: "600" }}>
                                                            LKR 8.00
                                                       </p>
                                                  </td>

                                                  <td className="align-middle">
                                                       <p className="mb-0" style={{ fontWeight: "600" }}>
                                                            LKR 13.50
                                                       </p>
                                                  </td>
                                             </tr>
                                        </MDBTableBody>
                                   </MDBTable>
                              </MDBCol>
                              <MDBCard
                                   className="shadow-2-strong mb-5 mb-lg-0 bg-dark"
                                   style={{ borderRadius: "16px" }}
                              >
                                   <MDBCardBody className="p-4 white">
                                        <MDBRow>
                                             <MDBCol md="5" lg="4" xl="3" className="mb-4 mb-md-0">
                                                  <form>
                                                       <div className="d-flex flex-row pb-4">
                                                            <div className="d-flex align-items-center pe-2">
                                                                 <MDBRadio
                                                                      type="radio"
                                                                      name="radio1"
                                                                      checked
                                                                      value=""
                                                                      aria-label="..."
                                                                 />
                                                            </div>
                                                            <div className="rounded border w-100 p-4">
                                                                 <p className="d-flex align-items-center mb-0" style={{ fontWeight: "500" }}>
                                                                      Credit Card
                                                                 </p>
                                                            </div>
                                                       </div>

                                                       <div className="d-flex flex-row pb-4">
                                                            <div className="d-flex align-items-center pe-2">
                                                                 <MDBRadio
                                                                      type="radio"
                                                                      name="radio1"
                                                                      checked
                                                                      value=""
                                                                      aria-label="..."
                                                                 />
                                                            </div>
                                                            <div className="rounded border w-100 p-3">
                                                                 <p className="d-flex align-items-center mb-0" style={{ fontWeight: "500" }}>
                                                                      Debit Card
                                                                 </p>
                                                            </div>
                                                       </div>

                                                       <div className="d-flex flex-row pb-3">
                                                            <div className="d-flex align-items-center pe-2">
                                                                 <MDBRadio
                                                                      type="radio"
                                                                      name="radio1"
                                                                      checked
                                                                      value=""
                                                                      aria-label="..."
                                                                 />
                                                            </div>
                                                            <div className="rounded border w-100 p-3">
                                                                 <p className="d-flex align-items-center mb-0" style={{ fontWeight: "500" }}>
                                                                      Cash on delivery
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </form>
                                             </MDBCol>
                                             <MDBCol md="6" lg="4" xl="6">
                                                  <MDBRow>
                                                       <MDBCol size="12" xl="6">
                                                            <MDBInput
                                                                 className="mb-4 mb-xl-3"
                                                                 label="Name on card"
                                                                 placeholder="John Smiths"
                                                                 size="lg"
                                                            />
                                                            <br />
                                                            <MDBInput
                                                                 className="mb-4 mb-xl-3"
                                                                 label="Expiration"
                                                                 placeholder="MM/YY"
                                                                 size="lg"
                                                                 maxLength={7}
                                                                 minLength={7}
                                                            />
                                                       </MDBCol>

                                                       <MDBCol size="12" xl="6">
                                                            <MDBInput
                                                                 className="mb-4 mb-xl-3"
                                                                 label="Card Number"
                                                                 placeholder="1111 2222 3333 4444"
                                                                 size="lg"
                                                                 minlength="19"
                                                                 maxlength="19"
                                                            />
                                                            <br />
                                                            <MDBInput
                                                                 className="mb-4 mb-xl-3"
                                                                 label="Cvv"
                                                                 placeholder="&#9679;&#9679;&#9679;"
                                                                 size="lg"
                                                                 minlength="3"
                                                                 maxlength="3"
                                                                 type="password"
                                                            />
                                                       </MDBCol>
                                                  </MDBRow>
                                             </MDBCol>
                                             <MDBCol lg="4" xl="3">
                                                  <div
                                                       className="d-flex justify-content-between"
                                                       style={{ fontWeight: "600" }}
                                                  >
                                                       <p className="mb-2">Subtotal</p>
                                                       <p className="mb-2">LKR 23.49</p>
                                                  </div>

                                                  <div
                                                       className="d-flex justify-content-between"
                                                       style={{ fontWeight: "600" }}
                                                  >
                                                       <p className="mb-0">Delivery</p>
                                                       <p className="mb-0">LKR 2.99</p>
                                                  </div>

                                                  <hr className="my-4" />

                                                  <div
                                                       className="d-flex justify-content-between mb-4"
                                                       style={{ fontWeight: "600" }}
                                                  >
                                                       <p className="mb-2">Total</p>
                                                       <p className="mb-2">LKR 26.48</p>
                                                  </div>

                                                  <MDBBtn block size="lg">
                                                       <div className="d-flex justify-content-between ">
                                                            <span>Checkout</span>
                                                            <span>LKR 26.48</span>
                                                       </div>
                                                  </MDBBtn>
                                             </MDBCol>
                                        </MDBRow>
                                   </MDBCardBody>
                              </MDBCard>
                         </MDBRow>
                    </MDBContainer>
                    <Footer />
               </section>

          </div>
     )
}
