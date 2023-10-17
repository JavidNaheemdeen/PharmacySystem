import React from 'react'
import Sidenav from '../../components/admin/Sidenav'
// import "../../style.css"
import AddProdModal from '../../components/modals/AddProdModal'
import UpdateProdModal from '../../components/modals/UpdateProdModal'

export default function PharmacyAdDashBoard() {
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
                                   <tr >
                                        {/* <th scope="row">{x}</th> */}
                                        <td>Panadol</td>
                                        <td>Paracitamol</td>
                                        <td>Tablets</td>
                                        <td>01</td>
                                        <td>100</td>
                                        <td>Rs.3</td>
                                        <td>Image</td>
                                        <td className="text-center">
                                             <UpdateProdModal />
                                             <a href='#' className='btn btn-danger btn-sm' >Delete</a>
                                        </td>
                                   </tr>
                              </tbody>
                         </table>
                         <br />


                    </div>
               </div>
          </div>
     )
}
