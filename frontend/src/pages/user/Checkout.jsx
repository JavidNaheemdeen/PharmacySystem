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
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery"); // Default to cash on delivery

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
      // Create an array to hold details for each product in the cart
      const productsDetails = cart.map((item) => ({
        productId: item.product._id,
        productname: item.product.productname,
        pharmacyId: item.product.pharmacyId,
        quantity: item.quantity,
        subtotal: item.product.unitprice * item.quantity,
      }));

      const updatedTotalPrice = totalPrice + 200;

      const orderData = {
        products: productsDetails,
        noOfItems,
        totalPrice: updatedTotalPrice,
        contactNumber,
        patientAddress,
        orderDate,
        paymentMethod, // Include the selected payment method
      };

      // Show a confirmation dialog
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
        // Send a request to your server to create a new order
        const response = await axios.post("http://localhost:3000/api/order/addorder", orderData);

        // Handle success or navigate to a success page
        console.log("Order created:", response.data);

        // Delete the cart after placing the order
        await axios.delete("http://localhost:3000/api/cart/deletecart/" + userId);

        // Show a SweetAlert success message
        Swal.fire({
          title: 'Order Placed!',
          text: 'Your order has been placed successfully.',
          icon: 'success',
        }).then(() => {
          // Redirect to the home page
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
        <div>
          <MDBCard
                            className="shadow-2-strong mb-5"
                            style={{
                              borderRadius: "16px",
                              background:
                                "linear-gradient(to right, #3498db, #6bb9f0)",
                              color: "white",
                            }}
                          >
                            <MDBTypography
                              tag="h3"
                              className="mb-2 pt-4 text-center fw-bold text-uppercase"
                            >
                              Payment
                            </MDBTypography>
                            <MDBCardBody className="p-4 justify-content-center align-center">
                              <MDBCol>
                                <MDBCol className="justify-content-center align-center">
                                  <label>Name on Card</label>
                                  <MDBInput
                                    className="mb-2"
                                    placeholder="John Smiths"
                                    size="lg"
                                  />
                                  <label>Expiration</label>
                                  <MDBInput
                                    className="mb-2"
                                    label=""
                                    placeholder="MM/YY"
                                    size="lg"
                                    maxLength={7}
                                    minLength={7}
                                  />
                                  <label>Card Number</label>
                                  <MDBInput
                                    className="mb-2"
                                    placeholder="1111 2222 3333 4444"
                                    size="lg"
                                    minlength="19"
                                    maxlength="19"
                                  />
                                  <label>Cvv</label>
                                  <MDBInput
                                    className="mb-2"
                                    placeholder="&#9679;&#9679;&#9679;"
                                    size="lg"
                                    minlength="3"
                                    maxlength="3"
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

  return (
    <div>
      <Header />
      <h1>Checkout Page</h1>

      <h2>Cart Details:</h2>
      <MDBInput
        className="mb-5"
        type="text"
        size="lg"
        placeholder="Address"
        value={orderDate}
        onChange={(e) => setOrderDate(e.target.value)}
        disabled
      />

      <ul>
        {cart.map((item) => (
          <li key={item.product._id}>
            {item.product.productname} - Quantity: {item.quantity} - Subtotal:{" "}
            {item.product.unitprice * item.quantity}
          </li>
        ))}
      </ul>

      <div>
        <p>Total Items: {noOfItems}</p>
        <p>Gross Price: LKR {totalPrice}</p>
        <p>Delivery Charge: LKR 200</p>
        <p>Total Price: LKR {totalPrice + 200}</p>
        <p>Address: {patientAddress}</p>
        <p>Contact: {contactNumber}</p>
      </div>

      <h3>Select Payment Method:</h3>
      <div>
        <MDBRadio
          label="Cash on Delivery"
          id="cashOnDelivery"
          name="paymentMethod"
          value="cashOnDelivery"
          onChange={() => setPaymentMethod("cashOnDelivery")}
          checked={paymentMethod === "Cash On Delivery"}
        />
        <MDBRadio
          label="Online Payment"
          id="onlinePayment"
          name="paymentMethod"
          value="onlinePayment"
          onChange={() => setPaymentMethod("onlinePayment")}
          checked={paymentMethod === "Online Payment"}
        />
      </div>

      {renderCreditCardForm()}

      <MDBBtn block size="lg mb-3" onClick={handleCheckout}>
        Place Order
      </MDBBtn>
      <Footer />
    </div>
  );
}
