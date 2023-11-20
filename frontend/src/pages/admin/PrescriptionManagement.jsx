import React, { useEffect, useState } from "react";
import { useNavigate  } from 'react-router-dom';
import Sidenav from '../../components/admin/SidenavAd'
import axios from "axios";
import Swal from 'sweetalert2';
import PrescriptionModal from "../../components/modals/PrescriptionModal";
import { BsFillTrashFill, BsFillEyeFill } from 'react-icons/bs'
import GeneratePrescrRepo from "../../components/modals/GeneratePrescrRepo";

export default function PrescriptionManagement() {

  const navigate = useNavigate();
  const [prescription, setPrescription] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const pharmacyId = localStorage.getItem('pharmacyId');


  useEffect(() => {
    // Check if the user is already logged in (e.g., check if a token or user data exists in local storage)
    if (!pharmacyId) {
      navigate('/Pharmlogin'); // Redirect to the dashboard if logged in
    }
  }, [navigate]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/prescription/pharmacy/" + pharmacyId)
      .then((res) => {
        setPrescription(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeletePrescription = (prescriptionId) => {
    Swal.fire({
      title: 'Confirm Deletion',
      text: 'Are you sure you want to delete this prescription?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/api/prescription/deleteprescription/${prescriptionId}`)
          .then(() => {
            setPrescription((prevPrescription) =>
            prevPrescription.filter((pr) => pr._id !== prescriptionId)
            );

            Swal.fire({
              title: 'Success',
              text: 'Prescription deleted successfully!',
              icon: 'success',
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const filteredPrescriptions = prescription.filter((pr) =>
    pr.patientname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Sidenav/>
      <br />
      <br />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-8">
          <h2 className="text-center">Prescription Dashboard</h2>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="text-center" style={{ width: '50%' }}>
            <input type="text"
              placeholder="Search by patient name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
            <div><GeneratePrescrRepo/></div>
          </div>
          <br />
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Patient Name</th>
                <th scope="col">Age</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Gender</th>
                <th scope="col">Allergy</th>
                <th className="text-center" scope="col">
                  Prescription
                </th>
              </tr>
            </thead>
            <tbody className="tbl-body">
              {filteredPrescriptions.map((pr) => (
                <tr key={pr._id}>
                  <td>{pr.patientname}</td>
                  <td>{pr.age}</td>
                  <td>{pr.yourphone}</td>
                  <td>{pr.address}</td>
                  <td>{pr.gender}</td>
                  <td>{pr.allergy}</td>
                  <td className="text-center">
                    <PrescriptionModal pic={pr.pic}/>
                    <br/>
                    <button 
                      onClick={() => handleDeletePrescription(pr._id)}
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
  )
}
