import React, { useEffect, useState } from "react";
import Sidenav from '../../components/admin/SidenavAd'
// import "../../style.css"
import AddProdModal from '../../components/modals/AddProdModal'
import UpdateProdModal from '../../components/modals/UpdateProdModal'
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import GeneratProReport from "../../components/modals/GeneratProReport";

export default function ProductDashBoard() {

     const [products, setProducts] = useState([]);
     const [searchTerm, setSearchTerm] = useState("");
     const navigate = useNavigate();

     const pharmacyId = localStorage.getItem("pharmacyId");

     useEffect(() => {
          // Check if the user is already logged in (e.g., check if a token or user data exists in local storage)
          const pharmacyId = localStorage.getItem('pharmacyId');
          if (!pharmacyId) {
               navigate('/Pharmlogin'); // Redirect to the dashboard if logged in
          }
     }, [navigate]);


     useEffect(() => {
          axios
               .get("http://localhost:3000/api/product/pharmacy/" + pharmacyId)
               .then((res) => {
                    setProducts(res.data);
               })
               .catch((err) => {
                    console.log(err);
               });
     }, []);

     const handleDeleteProduct = (productId) => {
          Swal.fire({
               title: "Confirm Deletion",
               text: "Are you sure you want to delete this product?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonText: "Yes",
               cancelButtonText: "No",
          }).then((result) => {
               if (result.isConfirmed) {
                    axios
                         .delete(`http://localhost:3000/api/product/deleteproduct/${productId}`)
                         .then(() => {
                              setProducts((prevProducts) =>
                                   prevProducts.filter((product) => product._id !== productId)
                              );

                              Swal.fire({
                                   title: "Success",
                                   text: "Product deleted successfully!",
                                   icon: "success",
                              });
                         })
                         .catch((err) => {
                              console.log(err);
                         });
               }
          });
     };

     const filteredProducts = products.filter((pr) =>
          pr.productname.toLowerCase().includes(searchTerm.toLowerCase())

     );

     return (
          <div>
               <Sidenav />
               <br />
               <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-8">
                         <h2 className='text-center'>Product Dashboard</h2>
                         <br />
                         <div className='text-center'><AddProdModal /></div>
                         <br />
                         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <div className="text-center" style={{ width: '50%' }}>
                                   <input type="text"
                                        placeholder="Search by name"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                   />
                              </div>
                              <div>
                                   <GeneratProReport />
                              </div>
                         </div>
                         <br />
                         <table className="table">
                              <thead className="thead-dark">
                                   <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Generic Name</th>
                                        <th scope="col">Form </th>
                                        <th scope="col">Batch Number</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Image</th>
                                        <th className="text-center" scope="col">Action</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {filteredProducts.map((pr) => (
                                        <tr key={pr._id}>
                                             <td>{pr.productname}</td>
                                             <td>{pr.genericname}</td>
                                             <td>{pr.form}</td>
                                             <td>{pr.batchnumber}</td>
                                             <td>{pr.quantity}</td>
                                             <td>{pr.unitprice}</td>
                                             <td>
                                                  <img
                                                       src={pr.logo}
                                                       style={{ width: "50px", height: "50px" }}
                                                       alt="Product Logo"
                                                  />
                                             </td>
                                             <td className="text-center">
                                                  <UpdateProdModal productId={pr._id} />
                                                  <button
                                                       onClick={() => handleDeleteProduct(pr._id)}
                                                       className="btn btn-danger btn-sm"
                                                  >
                                                       <BsFillTrashFill />
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
