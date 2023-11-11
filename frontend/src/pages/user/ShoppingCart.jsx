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
  MDBRadio,
} from "mdb-react-ui-kit";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import { Button } from "react-bootstrap";
import axios from "axios";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const userid = localStorage.getItem("userId");
  const pharmacyId = localStorage.getItem("pharmacyId");
  const [totalPrice, setTotalPrice] = useState(0);
  const [noOfItems, setNoOfItems] = useState(0);
  const [patientAddress, setPatientAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  

  const [paymentMethod, setPaymentMethod] = useState("yes");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePatientAddressChange = (e) => {
    setPatientAddress(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    // Validate that both patient address and contact number are filled
    if (!patientAddress || !contactNumber) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in both patient address and contact number.',
      });
      return; // Do not proceed with checkout if validation fails
    }

    // Prepare data for the checkout
    const checkoutData = {
      cart,
      noOfItems,
      totalPrice,
      patientAddress,
      contactNumber,
      // other data you want to pass
    };

    // Navigate to the checkout page with the data
    navigate("/checkout", { state: checkoutData });
  }
  
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
    },[]);

  axios
    .get(`http://localhost:3000/api/cart/${userid}/count`)
    .then((response) => {
      setNoOfItems(response.data.count);
    })
    .catch((error) => {
      console.log(error);
    },[]);

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
            window.location.href = "/";
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
              <MDBCard style={{ borderRadius: "19px" }}>
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
                          <p className="mb-0">
                            You have {noOfItems} items in your cart
                          </p>
                        </div>
                      </div>
                      {cart &&
                        cart.map((ct) => (
                          <MDBCard className="mb-3 shadow">
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
                                    <p className="small mb-0">
                                      {ct.product?.form}
                                    </p>
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
                                  <a
                                    href="#!"
                                    onClick={(e) =>
                                      handleRemoveProduct(ct.product._id, e)
                                    }
                                    style={{ color: "#cecece" }}
                                  >
                                    <span style={{ color: "red" }}>
                                      <BsFillTrashFill />
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between">
                                <h6 className="mb-2">Sub Total</h6>
                                <h6 className="mb-2">
                                  LKR {ct.product?.unitprice * ct.quantity}
                                </h6>
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

                    <MDBCol
                      lg="5"
                      className="px-5 py-4"
                      style={{ backgroundColor: "#eee", borderRadius: "15px" }}
                    >
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-0 text-center fw-bold text-uppercase"
                      >
                        Delivery Details
                      </MDBTypography>

                      <form className="mb-5">
                        <label
                          style={{ display: "block", marginBottom: "25px" }}
                        >
                          Address
                        </label>
                        <MDBInput
                          className="mb-5"
                          // label="Delivery Address"
                          type="address"
                          size="lg"
                          placeholder="Address"
                          onChange={handlePatientAddressChange}
                          style={{ display: "block", marginBottom: "10px" }}
                        />

                        <label
                          style={{ display: "block", marginBottom: "25px" }}
                        >
                          Contact No
                        </label>
                        <MDBInput
                          className="mb-5"
                          // label="Contact No"
                          type="tel"
                          size="lg"
                          placeholder="01234567899"
                          onChange={handleContactNumberChange}
                          style={{ display: "block", marginBottom: "10px" }}
                        />

                          <MDBBtn
                            block
                            size="lg mb-3"
                            onClick={handleCheckout}
                            disabled={noOfItems === 0} // Disable the button if noOfItems is 0
                          >
                            Checkout
                          </MDBBtn>

                        <MDBTypography
                          tag="h5"
                          className="fw-bold pr-5"
                          style={{ marginTop: "2" }}
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
  );
}
