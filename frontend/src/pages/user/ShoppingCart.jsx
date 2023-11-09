import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Header from '../../components/user/Header';
import Footer from '../../components/user/Footer';
import { Button } from "react-bootstrap";
import axios from "axios";
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import Swal from "sweetalert2";

export default function ShoppingCart() {

const [cart, setCart] = useState([]);
  const userid = localStorage.getItem("userId");
  const [totalPrice, setTotalPrice] = useState(0);
  const [noOfItems, setNoOfItems] = useState(0);

  useEffect(() => {
     axios
       .get(`http://localhost:3000/api/cart/${userid}`)
       .then(function (response) {
         console.log(response);
         setCart(response.data.products);
       })
       .catch(function (err) {
         console.log(err);
       });
   }, [cart]);

   const handleRemoveProduct = (productId, e) => {
     e.preventDefault();
     axios
       .delete(`http://localhost:3000/api/cart/${userid}/product/` + productId)
       .then((response) => {
         console.log(response.data);
       })
       .catch((error) => {
         console.log(error);
       });
   };

   axios
    .get(`http://localhost:3000/api/cart/${userid}/totalPrice`)
    .then((response) => {
      console.log(response.data);
      setTotalPrice(response.data.totalPrice);
    })
    .catch((error) => {
      console.log(error);
    });

    axios
    .get(`http://localhost:3000/api/cart/${userid}/count`)
    .then((response) => {
      setNoOfItems(response.data.count)
    })
    .catch((error) => {
      console.log(error)
    })

    const handleRemove = () => {
     axios
       .delete(`http://localhost:3000/api/cart/deletecart/${userid}`)
       .then((response) => {
         console.log("Deleted");
         setCart([]);
         Swal.fire({
          title: "Success!",
          text: "Successfully deleted the Cart",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/';
          }
        });
       })
       .catch((error) => {
         console.log(error);
       });
   };

     return (
          <div>
               <Header />
               <br />
               <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="p-4">
                  <MDBRow>
                    <MDBCol lg="7" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Your products
                      </MDBTypography>

                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-0">You have {noOfItems} items in your cart</p>
                        </div>
                      </div>
                      {cart &&
                        cart.map((ct) => (
                      <MDBCard className="mb-3">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <MDBCardImage
                                  src={ct.product?.logo}
                                  fluid
                                  className="rounded-3"
                                  style={{ width: "65px" }}
                                  alt="Shopping item"
                                />
                              </div>
                              <div className="ms-3">
                                <MDBTypography tag="h5">
                                {ct.product?.productname}
                                </MDBTypography>
                                <p className="small mb-0">{ct.product?.form}</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <MDBTypography
                                  tag="h5"
                                  className="fw-normal mb-0"
                                >
                                  {ct.quantity}
                                </MDBTypography>
                              </div>
                              <div style={{ width: "150px" }}>
                                <MDBTypography tag="h5" className="mb-0">
                                LKR {ct.product?.unitprice}
                                </MDBTypography>
                              </div>
                              <a href="#!" onClick={(e) =>
                                  handleRemoveProduct(ct.product._id, e)
                                } style={{ color: "#cecece" }}>
                                <span style={{ color: "red" }}><BsFillTrashFill/></span>
                              </a>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-2">Sub Total</h6>
                            <h6 className="mb-2">LKR {ct.product?.unitprice * ct.quantity}</h6>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                      ))}
                      <div className="d-flex justify-content-between">
                        <h3 className="mb-2">Total</h3>
                        <h3 className="mb-2">LKR {totalPrice}</h3>
                      </div>
                      <Button onClick={handleRemove}>Discard Cart</Button>
                    </MDBCol>
                    

                    <MDBCol lg="5" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Payment
                      </MDBTypography>

                      <form className="mb-5">
                        <MDBInput
                          className="mb-5"
                          label="Card number"
                          type="text"
                          size="lg"
                          placeholder="1234 5678 9012 3457"
                        />

                        <MDBInput
                          className="mb-5"
                          label="Name on card"
                          type="text"
                          size="lg"
                          placeholder="John Smith"
                        />

                        <MDBRow>
                          <MDBCol md="6" className="mb-5">
                            <MDBInput
                              className="mb-4"
                              label="Expiration"
                              type="text"
                              size="lg"
                              minLength="7"
                              maxLength="7"
                              placeholder="MM/YYYY"
                            />
                          </MDBCol>
                          <MDBCol md="6" className="mb-5">
                            <MDBInput
                              className="mb-4"
                              label="Cvv"
                              type="text"
                              size="lg"
                              minLength="3"
                              maxLength="3"
                              placeholder="&#9679;&#9679;&#9679;"
                            />
                          </MDBCol>
                        </MDBRow>

                        <p className="mb-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit
                          <a href="#!"> obcaecati sapiente</a>.
                        </p>

                        <MDBBtn block size="lg">
                          Buy now
                        </MDBBtn>

                        <MDBTypography
                          tag="h5"
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          <a href="/">
                            <MDBIcon fas icon="angle-left me-2" />
                            Back to shopping
                          </a>
                        </MDBTypography>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
               
               <Footer />
               

          </div>
     )
}
