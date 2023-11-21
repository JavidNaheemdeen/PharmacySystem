import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
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
import axios from "axios";
import Swal from 'sweetalert2';

export default function Checkout() {
  const location = useLocation();
  const { cart, noOfItems, totalPrice, contactNumber, patientAddress } = location.state;
  const [orderDate, setOrderDate] = useState(getSriLankanDateTime());
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");

  const userId = localStorage.getItem('userId');

  // Function to get the formatted current date and time
  function getSriLankanDateTime() {
    const currentDateTime = new Date();
    const options = {
      timeZone: "Asia/Colombo",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(currentDateTime);
    return formattedDateTime;
  }

  // Update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setOrderDate(getSriLankanDateTime());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);


  const handleCheckout = async () => {

    try {
      const productsDetails = cart.map((item) => ({
        productId: item.product._id,
        productname: item.product.productname,
        pharmacyId: item.product.pharmacyId,
        quantity: item.quantity,
        subtotal: item.product.unitprice * item.quantity,
      }));

      const updatedTotalPrice = (totalPrice + 200).toFixed(2);


      const orderData = {
        products: productsDetails,
        noOfItems,
        totalPrice: updatedTotalPrice,
        contactNumber,
        patientAddress,
        orderDate,
        paymentMethod,
        userId,
      };

      const isConfirmed = await Swal.fire({
        title: 'Confirm Order',
        text: 'Are you sure you want to place the order?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, place order!',
      });

      // Check if the user confirmed the order
      if (isConfirmed.isConfirmed) {
        const response = await axios.post("http://localhost:3000/api/order/addorder", orderData);

        console.log("Order created:", response.data);

        await axios.delete("http://localhost:3000/api/cart/deletecart/" + userId);

        Swal.fire({
          title: 'Order Placed!',
          text: 'Your order has been placed successfully.',
          icon: 'success',
        }).then(() => {
          window.location.href = "/";
        });
      }
    } catch (error) {
      console.error("Error creating order:", error);

      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  // Render credit card details form if online payment is selected
  const renderCreditCardForm = () => {
    if (paymentMethod === "onlinePayment") {
      return (
        <div className="d-flex justify-content-center align-items-center text-center">
          <MDBCard
            className="shadow-2-strong mb-5 justify-content-center align-items-center text-center"
            style={{
              borderRadius: "16px",
              background: "linear-gradient(to right, #3498db, #6bb9f0)",
              color: "white",
            }}
          >
            <MDBTypography
              tag="h3"
              className="mb-2 pt-4 text-center fw-bold text-uppercase"
            >
              Payment
            </MDBTypography>
            <MDBCardBody className="d-flex justify-content-center align-items-center text-center">
              <MDBCol className="text-center">
                <MDBCol>
                  <label htmlFor="nameOnCard">Name on Card</label>
                  <MDBInput
                    id="nameOnCard"
                    className="mb-2"
                    placeholder="John Smiths"
                    size="lg"
                    required="true"
                  />
                  <label htmlFor="expiration">Expiration</label>
                  <MDBInput
                    id="expiration"
                    className="mb-2"
                    placeholder="MM/YY"
                    size="lg"
                    maxLength={7}
                    minLength={7}
                  />
                  <label htmlFor="cardNumber">Card Number</label>
                  <MDBInput
                    id="cardNumber"
                    className="mb-2"
                    placeholder="1111 2222 3333 4444"
                    size="lg"
                    minLength="16"
                    maxLength="16"
                  />
                  <label htmlFor="cvv">CVV</label>
                  <MDBInput
                    id="cvv"
                    className="mb-2"
                    placeholder="&#9679;&#9679;&#9679;"
                    size="lg"
                    minLength="3"
                    maxLength="3"
                    type="password"
                  />
                </MDBCol>
              </MDBCol>
            </MDBCardBody>
          </MDBCard>
        </div>
      );
    }
    return null;
  };

  const tableCellStyle = {
    padding: "10px",
    textAlign: "left",
  };


  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Header />
      <br />
      <br />
      <br />
      <div className="container" style={{ maxWidth: "600px", margin: "auto", backgroundColor: "white", borderRadius: "16px", marginTop: "12px", marginBottom: "12px" }}>
        <h1 style={{ textAlign: "center" }}>Checkout</h1>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th style={tableCellStyle}>Product</th>
              <th style={tableCellStyle}>Quantity</th>
              <th style={tableCellStyle}>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.product._id} style={{ borderBottom: "1px solid #ccc" }}>
                <td style={tableCellStyle}>
                  <strong>{item.product.productname}</strong>
                </td>
                <td style={tableCellStyle}>{item.quantity}</td>
                <td style={tableCellStyle}>LKR {item.product.unitprice * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table thead-dark" style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
          <tbody>
            <tr>
              <th className="bold">Total Items:</th>
              <td><b>{noOfItems}</b></td>
            </tr>
            <tr>
              <th className="bold">Gross Price: </th>
              <td><b>LKR {totalPrice}</b></td>
            </tr>
            <tr>
              <th className="bold">Delivery Charge: </th>
              <td>LKR 200</td>
            </tr>
            <tr>
              <th style={{ fontSize: "25px" }} className="bold">Total Price:</th>
              <td style={{ fontSize: "25px", color: "red" }}><b>LKR {(totalPrice + 200).toFixed(2)}</b></td>
            </tr>
            <tr>
              <hr />
            </tr>
            <tr>
              <th className="bold">Address:</th>
              <td>{patientAddress}</td>
            </tr>
            <tr>
              <th className="bold">Contact:</th>
              <td>{contactNumber}</td>
            </tr>
          </tbody>
        </table>

        <br />

        <h4 style={{ marginTop: "20px" }}>Select Payment Method</h4>
        <div>
          <label style={{ marginRight: "10px" }}>
            <MDBRadio
              label="Cash on Delivery"
              id="cashOnDelivery"
              name="paymentMethod"
              value="cashOnDelivery"
              onChange={() => setPaymentMethod("cashOnDelivery")}
              checked={paymentMethod === "cashOnDelivery"}
            />
          </label>
          <label>
            <MDBRadio
              label="Online Payment"
              id="onlinePayment"
              name="paymentMethod"
              value="onlinePayment"
              onChange={() => setPaymentMethod("onlinePayment")}
              checked={paymentMethod === "onlinePayment"}
            />
          </label>
        </div>
        <br />
        {renderCreditCardForm()}

        <div className="text-center">
          <MDBBtn className="btn btn-def" block size="lg mb-3" onClick={handleCheckout} style={{ marginTop: "10px", width: "60%" }}>
            Place Order
          </MDBBtn>
        </div>
      </div>
      <Footer />
    </div>
  );
}
