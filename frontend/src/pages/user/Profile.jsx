import React, { useEffect, useState } from "react";
import {
     MDBCol,
     MDBContainer,
     MDBRow,
     MDBCard,
     MDBCardText,
     MDBCardBody,
     MDBCardImage,
     MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AdminEditModal from "../../components/modals/AdprofEditModal";
import Swal from 'sweetalert2';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import UsprofEditModal from "../../components/modals/UsprofEditModal";

export default function Profile() {

     const [user, setUser] = useState({});
     const userId = localStorage.getItem("userId");
     console.log(userId);

     const navigate = useNavigate();

     useEffect(() => {
          // Check if the user is already logged in (e.g., check if a token or user data exists in local storage)
          const userId = localStorage.getItem('userId');
          if (!userId) {
               navigate('/'); // Redirect to the dashboard if logged in
          }
     }, [navigate]);

     useEffect(() => {
          axios
               .get(`http://localhost:3000/api/user/${userId}`)
               .then((res) => {
                    setUser(res.data);
               })
               .catch((err) => {
                    console.log(err);
               });
     }, []);

     const handleDeleteUser = (userId) => {
          Swal.fire({
               title: 'Confirm Deletion',
               text: 'Are you sure you want to delete this Profile?',
               icon: 'warning',
               showCancelButton: true,
               confirmButtonText: 'Yes',
               cancelButtonText: 'No',
          }).then((result) => {
               if (result.isConfirmed) {
                    axios
                         .delete(`http://localhost:3000/api/user/deleteuser/${userId}`)
                         .then(() => {
                              setUser((prevUser) =>
                                   prevUser.filter((userId) => userId._id !== userId)
                              );

                              Swal.fire({
                                   title: 'Success',
                                   text: 'Profile deleted successfully!',
                                   icon: 'success',
                              });
                              navigate('/');
                         })
                         .catch((err) => {
                              console.log(err);
                         });
               }
          });
     };


     return (
          <div>
               <Header />
               <br />
               <br /><br /><br />
               <h2 className="text-center">User Profile</h2>
               <br />
               <section style={{ backgroundColor: "#e0ffe0", borderRadius: "16px" }}>
                    <MDBContainer className="py-5" style={{ fontSize: '20px', borderRadius: "16px" }}>
                         <MDBRow>
                              <MDBCard className="mb-4">
                                   <MDBCardBody>
                                        <MDBRow>
                                             <MDBCol sm="3">
                                                  <MDBCardText>Name</MDBCardText>
                                             </MDBCol>
                                             <MDBCol sm="9">
                                                  <MDBCardText className="text-muted">
                                                       <b>{user.name}</b>
                                                  </MDBCardText>
                                             </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                             <MDBCol sm="3">
                                                  <MDBCardText>Email</MDBCardText>
                                             </MDBCol>
                                             <MDBCol sm="9">
                                                  <MDBCardText className="text-muted">
                                                       <b>{user.email}</b>
                                                  </MDBCardText>
                                             </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                             <MDBCol sm="3">
                                                  <MDBCardText>Address</MDBCardText>
                                             </MDBCol>
                                             <MDBCol sm="9">
                                                  <MDBCardText className="text-muted">
                                                       <b>{user.address}</b>
                                                  </MDBCardText>
                                             </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                             <MDBCol sm="3">
                                                  <MDBCardText>Contact No.</MDBCardText>
                                             </MDBCol>
                                             <MDBCol sm="9">
                                                  <MDBCardText className="text-muted">
                                                       <b>{user.contact}</b>
                                                  </MDBCardText>
                                             </MDBCol>
                                        </MDBRow>
                                        <hr />

                                        <div className="d-flex justify-content-center mb-2">
                                             {/* <MDBBtn className="btn btn-success me-1"> */}
                                             <UsprofEditModal usid={user._id} />
                                             <button
                                                  onClick={() => handleDeleteUser(user._id)}
                                                  className="btn btn-danger btn-sm"
                                             >
                                                  <BsFillTrashFill />
                                             </button>
                                        </div>
                                   </MDBCardBody>
                              </MDBCard>
                         </MDBRow>
                    </MDBContainer>
               </section>
               <Footer />
          </div>
     )
}
