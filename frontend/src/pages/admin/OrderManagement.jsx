import React, { useEffect, useState } from "react";
import SidenavAd from "../../components/admin/SidenavAd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ViewProductModal from "../../components/modals/ViewProductModal";
import {BsFillHandThumbsUpFill, BsFillTrashFill} from 'react-icons/bs'
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
       title: 'Delete Order',
       text: 'Are you sure to delete the order?',
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
               text: 'Order Deleted Successfully!',
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

   const handleDoneOrder = (orderId) => {
    Swal.fire({
      title: "Confirm Dispatch",
      text: "Are you sure the order has been Dispatched?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        // Update order status to "Dispatched"
        axios
          .put(`http://localhost:3000/api/order/updateorder/${orderId}`, {
            orderStatus: "Dispatched",
          })
          .then(() => {
            Swal.fire({
              title: "Order Dispatched",
              text: "Order Successfully Dispatched",
              icon: "success",
            }).then(() => {
              window.location.reload();
            });
          })
          .catch((error) => {
            console.error("Error updating order status:", error);
            Swal.fire({
              title: "Error",
              text: "Failed to update order status.",
              icon: "error",
            });
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
                <th>Order Status</th>
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
                  <td>{or.orderStatus}</td>
                  <td>
                    <ViewProductModal products={or.products} />
                    <button 
                      onClick={() => handleDoneOrder(or._id)}
                      className="btn btn-success btn-sm me-1"
                    >
                      <BsFillHandThumbsUpFill/>
                    </button>
                    
                    <button 
                      onClick={() => handleDeleteOrder(or._id)}
                      className="btn btn-danger btn-sm"
                    >
                      <BsFillTrashFill/>
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
