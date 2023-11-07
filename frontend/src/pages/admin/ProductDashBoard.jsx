import React, { useEffect, useState } from "react";
import Sidenav from '../../components/admin/SidenavAd'
// import "../../style.css"
import AddProdModal from '../../components/modals/AddProdModal'
import UpdateProdModal from '../../components/modals/UpdateProdModal'
import axios from "axios";
import Swal from "sweetalert2";

export default function ProductDashBoard() {

     const [products, setProducts] = useState([]);

     const pharmacyId = localStorage.getItem("pharmacyId");

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
                         <div className="text-center">
                              <input type="text"
                                   placeholder="Search by name or batch number" />
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
                                   {products.map((product) => (
                                        <tr key={product._id}>
                                             <td>{product.productname}</td>
                                             <td>{product.genericname}</td>
                                             <td>{product.form}</td>
                                             <td>{product.batchnumber}</td>
                                             <td>{product.quantity}</td>
                                             <td>{product.unitprice}</td>
                                             <td>
                                                  <img
                                                       src={product.logo}
                                                       style={{ width: "50px", height: "50px" }}
                                                       alt="Product Logo"
                                                  />
                                             </td>
                                             <td className="text-center">
                                                  <UpdateProdModal productId={product._id} />
                                                  <br />
                                                  <button
                                                       onClick={() => handleDeleteProduct(product._id)}
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
