import React, { useEffect, useState } from "react";
import SidenavSuperAd from "../../components/admin/SidenavSuperAd";
import UpdatePharmModal from "../../components/modals/UpdatePharmModal";
import axios from "axios";
import Swal from 'sweetalert2';

export default function PharmacyDashboard() {
  const [pharmacy, setPharmacy] = useState([]);

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
      <SidenavSuperAd />
      <br />
      <br />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-8">
          <h2 className="text-center">Pharmacy Dashboard</h2>
          <br />
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
            <tbody>
              {pharmacy.map((pm) => (
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
                    <br/>
                    <button
                      onClick={() => handleDeletePharmacy(pm._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
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
