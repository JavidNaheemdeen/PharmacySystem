import React from 'react'
import SidenavSuperAd from '../../components/admin/SidenavSuperAd'
import AddProdModal from '../../components/modals/AddProdModal'
import UpdateSupAdModal from '../../components/modals/UpdateSupAdModal'

export default function SuperAdDashBoard() {
     return (
          <div>
               <SidenavSuperAd />


               <br />
               {/* <SearchExamModal/> */}
               {/* <SearchEs/> */}
               <br />
               <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-8">
                         <h2 className='text-center'>Pharmacy Dashboard</h2>
                         <br />
                         <table className="table">
                              <thead className="thead-dark">
                                   <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Company Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">logo</th>
                                        <th className="text-center" scope="col">Action</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr >
                                        {/* <th scope="row">{x}</th> */}
                                        <td>Kevin heart</td>
                                        <td>*******</td>
                                        <td>Cure Me</td>
                                        <td>+94 77 156 4563</td>
                                        <td>kevin@gmail.com</td>
                                        <td>kandy</td>
                                        <td>Logo</td>
                                        <td className="text-center">
                                             <UpdateSupAdModal />
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
