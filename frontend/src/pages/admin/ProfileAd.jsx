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
import SidenavAd from "../../components/admin/SidenavAd";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AdminEditModal from "../../components/modals/AdprofEditModal";
import Swal from 'sweetalert2';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export default function ProfileAd() {
  const [pharmacy, setPharmacy] = useState({});
  const pharmId = localStorage.getItem("pharmacyId");
  console.log(pharmId);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in (e.g., check if a token or user data exists in local storage)
    const pharmacyId = localStorage.getItem('pharmacyId');
    if (!pharmacyId) {
      navigate('/Pharmlogin'); // Redirect to the dashboard if logged in
    }
  }, [navigate]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/pharmacy/${pharmId}`)
      .then((res) => {
        setPharmacy(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeletePharmacy = (pharmacyId) => {
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
          .delete(`http://localhost:3000/api/pharmacy/deletepharmacy/${pharmacyId}`)
          .then(() => {
            setPharmacy((prevPharmacy) =>
              prevPharmacy.filter((pm) => pm._id !== pharmacyId)
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
      <SidenavAd />
      <br />
      <br />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-8">
          <h2 className="text-center">Pharmacy Profile</h2>
          <br />
          <section style={{ backgroundColor: "#e0ffe0", borderRadius: "16px" }}>
            <MDBContainer className="py-5" style={{ fontSize: '20px', borderRadius: "16px" }}>
              <MDBRow>
                <MDBCol lg="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                      <MDBCardImage
                        src={pharmacy.logo}
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: "150px" }}
                        fluid
                      />
                      <br /><br /><br /><br />

                      <div className="d-flex justify-content-center mb-2">
                        {/* <MDBBtn className="btn btn-success me-1"> */}
                        <AdminEditModal pmid={pharmacy._id} />
                        <button
                          onClick={() => handleDeletePharmacy(pharmacy._id)}
                          className="btn btn-danger btn-sm"
                        >
                          <BsFillTrashFill />
                        </button>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="8">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            <b>{pharmacy.name}</b>
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
                            <b>{pharmacy.email}</b>
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
                            <b>{pharmacy.address}</b>
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Town</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            <b>{pharmacy.town}</b>
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
                            <b>{pharmacy.contact}</b>
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Opening Time</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            <b>{pharmacy.opentime}</b>
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </div>
      </div>
    </div>
  );
}
