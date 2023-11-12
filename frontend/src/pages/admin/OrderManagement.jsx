import React, { useEffect, useState } from "react";
import SidenavAd from "../../components/admin/SidenavAd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ViewProductModal from "../../components/modals/ViewProductModal";
import {BsFillHandThumbsUpFill } from 'react-icons/bs'
import Swal from 'sweetalert2';

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const pharmacyId = localStorage.getItem("pharmacyId");

  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Check if the user is already logged in (e.g., check if a token or user data exists in local storage)
    if (!pharmacyId) {
      navigate("/Pharmlogin"); // Redirect to the dashboard if logged in
    }
  }, [navigate]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/order/pharmacy/" + pharmacyId)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteOrder = (orderId) => {
     Swal.fire({
       title: 'Order Dispatched',
       text: 'Are you sure the order is dispatched?',
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: 'Yes',
       cancelButtonText: 'No',
     }).then((result) => {
       if (result.isConfirmed) {
         axios
           .delete(`http://localhost:3000/api/order/deleteorder/${orderId}`)
           .then(() => {
               setOrders((prevOrder) =>
               prevOrder.filter((or) => or._id !== pharmacyId)
             );
 
             Swal.fire({
               title: 'Success',
               text: 'Order Successfully Dispatched!',
               icon: 'success',
             }).then(() => {
               window.location.reload();
             });
           })
           .catch((err) => {
             console.log(err);
           });
       }
     });
   };


  return (
    <div>
      <SidenavAd />
      <br />
      <br />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-8">
          <h2 className="text-center">Order Dashboard</h2>
          <br />
          <br />
          <table className="table">
            <thead className="thead-dark">
              <tr>
                {/* <th>Order ID</th> */}
                <th>Order Date</th>
                <th>No. of Items</th>
                <th>Total Price</th>
                <th>Contact Number</th>
                <th>Patient Address</th>
                <th>Payment Method</th>
                <th>Products</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((or) => (
                <tr key={or._id}>
                  <td>{or.orderDate}</td>
                  <td>{or.noOfItems}</td>
                  <td>{or.totalPrice}</td>
                  <td>{or.contactNumber}</td>
                  <td>{or.patientAddress}</td>
                  <td>{or.paymentMethod}</td>
                  <td>
                    <ViewProductModal products={or.products} />
                    <button 
                      onClick={() => handleDeleteOrder(or._id)}
                      className="btn btn-success btn-sm"
                    >
                      <BsFillHandThumbsUpFill/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
      </div>
    </div>
  );
}
