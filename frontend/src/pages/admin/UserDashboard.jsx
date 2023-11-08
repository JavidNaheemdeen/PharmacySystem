import React, { useEffect, useState } from 'react';
import SidenavSuperAd from '../../components/admin/SidenavSuperAd'
import UpdateUser from '../../components/modals/UpdateUserModal'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function UserDashboard() {


     const [users, setUsers] = useState([]);

     useEffect(() => {
          axios
               .get('http://localhost:3000/api/user')
               .then((res) => {
                    setUsers(res.data);
               })
               .catch((err) => {
                    console.log(err);
               });
     }, []);

     const handleDeleteUser = (userId) => {
          Swal.fire({
               title: 'Confirm Deletion',
               text: 'Are you sure you want to delete this user?',
               icon: 'warning',
               showCancelButton: true,
               confirmButtonText: 'Yes',
               cancelButtonText: 'No',
          }).then((result) => {
               if (result.isConfirmed) {
                    axios
                         .delete(`http://localhost:3000/api/user/deleteuser/${userId}`)
                         .then(() => {
                              setUsers((prevUsers) =>
                                   prevUsers.filter((user) => user._id !== userId)
                              );

                              Swal.fire({
                                   title: 'Success',
                                   text: 'User deleted successfully!',
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
                         <h2 className="text-center">User Dashboard</h2>
                         <br />
                         <br />
                         <table className="table">
                              <thead className="thead-dark">
                                   <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Contact number</th>
                                        <th scope="col">Email</th>
                                        <th className="text-center" scope="col">
                                             Action
                                        </th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {users.map((user) => (
                                        <tr key={user._id}>
                                             <td>{user.name}</td>
                                             <td>{user.address}</td>
                                             <td>{user.contact}</td>
                                             <td>{user.email}</td>
                                             <td className="text-center">
                                                  <UpdateUser userId={user._id} />
                                                  <button
                                                       onClick={() => handleDeleteUser(user._id)}
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
     )
}
