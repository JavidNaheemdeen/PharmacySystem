import React, { useEffect, useState } from "react";
import SidenavSuperAd from "../../components/admin/SidenavSuperAd";
import UpdatePharmModal from "../../components/modals/UpdatePharmModal";
import axios from "axios";
import Swal from 'sweetalert2';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import { useNavigate  } from 'react-router-dom';

export default function PharmacyDashboard() {
  const [pharmacy, setPharmacy] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in (e.g., check if a token or user data exists in local storage)
    const superadminId = localStorage.getItem("superadminId");
    if (!superadminId) {
      navigate('/Adminlogin'); // Redirect to the dashboard if logged in
    }
  }, [navigate]);


  useEffect(() => {
    axios
      .get("http://localhost:3000/api/pharmacy/")
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
      text: 'Are you sure you want to delete this pharmacy?',
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
              text: 'Pharmacy deleted successfully!',
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

  // Filter pharmacies based on the search term
  const filteredPharmacies = pharmacy.filter((pm) =>
    pm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pm.town.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <SidenavSuperAd />
      <br />
      <br />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-8">
          <h2 className="text-center">Pharmacy Dashboard</h2>
          <br />
          <div className="text-center">
            <input type="text"
              placeholder="Search by name or town"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <br />
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Town</th>
                <th scope="col">Contact number</th>
                <th scope="col">Logo</th>
                <th scope="col">Opening Hour</th>
                <th className="text-center" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="tbl-body">
              {filteredPharmacies.map((pm) => (
                <tr key={pm._id}>
                  <td>{pm.name}</td>
                  <td>{pm.email}</td>
                  <td>{pm.address}</td>
                  <td>{pm.town}</td>
                  <td>{pm.contact}</td>
                  <td>
                    <img
                      src={pm.logo}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>{pm.opentime}</td>
                  <td className="text-center">
                    <UpdatePharmModal pmid={pm._id} />
                    <button 
                      onClick={() => handleDeletePharmacy(pm._id)}
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
