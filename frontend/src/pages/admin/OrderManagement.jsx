import React from 'react'
import SidenavAd from '../../components/admin/SidenavAd'

export default function OrderManagement() {
     return (
          <div>
               <SidenavAd />
               <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-8">
                         <main className="main-container">
                              <h2 className="text-center">Order Management</h2>
                              <br />
                              <div className="main-cards">
                                   <div className="cards">
                                        <div className="card-inner">
                                             <h3>Products Sold</h3>
                                             <h1>20</h1>
                                        </div>
                                   </div>
                                   <div className="cards">
                                        <div className="card-inner">
                                             <h3>Online Payments</h3>
                                             <h1>20</h1>
                                        </div>
                                   </div>
                                   <div className="cards">
                                        <div className="card-inner">
                                             <h3>Cash on delivery</h3>
                                             <h1>20</h1>
                                        </div>
                                   </div>
                                   <div className="cards">
                                        <div className="card-inner">
                                             <h3>Alerts</h3>
                                             <h1>20</h1>
                                        </div>
                                   </div>

                              </div>
                         </main>
                    </div>
               </div>
          </div>
     )
}
