import React from 'react'
import { useState } from "react";
import Header from '../../components/user/Header';
import Footer from '../../components/user/Footer';


export default function Prescription() {
     const [hasAllergy, setHasAllergy] = useState('no');

     const handleAllergyChange = (e) => {
          setHasAllergy(e.target.value);
     };
     return (
          <div>
               <Header />
               <div className="prescription-form-container">
                    <h2>Prescription Form</h2>
                    <div className="form-columns">
                         <div className="form-column">
                              <form className="prescription-form">
                                   {/* Left Column */}
                                   <div className="form-group">
                                        <label htmlFor="yourName">Your Name:</label>
                                        <input type="text" id="yourName" name="yourName" required />
                                   </div>
                                   <div className="form-group">
                                        <label htmlFor="patientName">Patient Name:</label>
                                        <input type="text" id="patientName" name="patientName" required />
                                   </div>
                                   <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" required />
                                   </div>
                                   <div className="form-group">
                                        <label htmlFor="age">Age:</label>
                                        <input type="number" id="age" name="age" required />
                                   </div>
                                   <div className="form-group">
                                        <label htmlFor="yourPhone">Your Phone:</label>
                                        <input type="tel" id="yourPhone" name="yourPhone" required />
                                   </div>
                              </form>
                         </div>
                         <div className="form-column">
                              <form className="prescription-form">
                                   {/* Right Column */}
                                   <div className="form-group">
                                        <label htmlFor="whatsappNumber">WhatsApp Number:</label>
                                        <input type="tel" id="whatsappNumber" name="whatsappNumber" required />
                                   </div>
                                   <div className="form-group">
                                        <label>Delivery Type:</label>
                                        <div className="radio-group">
                                             <input type="radio" id="homeDelivery" name="deliveryType" value="home" required />
                                             <label htmlFor="homeDelivery">Home Delivery</label>
                                             <input type="radio" id="corporateDelivery" name="deliveryType" value="corporate" required />
                                             <label htmlFor="corporateDelivery">Corporate Delivery</label>
                                        </div>
                                   </div>
                                   <div className="form-group">
                                        <label htmlFor="address">Address:</label>
                                        <input type="text" id="address" name="address" required />
                                   </div>
                                   <div className="form-group">
                                        <label htmlFor="deliveryLocation">Delivery Location:</label>
                                        <select id="deliveryLocation" name="deliveryLocation" required>
                                             <option value="option1">Option 1</option>
                                             <option value="option2">Option 2</option>
                                             <option value="option3">Option 3</option>
                                        </select>
                                   </div>
                              </form>
                         </div>
                    </div>
                    <form className="prescription-form">
                         <div className="form-group">
                              <label>Gender:</label>
                              <div className="radio-group">
                                   <input type="radio" id="male" name="gender" value="male" required />
                                   <label htmlFor="male">Male</label>
                                   <input type="radio" id="female" name="gender" value="female" required />
                                   <label htmlFor="female">Female</label>
                              </div>
                         </div>
                         <div className="form-group">
                              <label>Do you have allergies?</label>
                              <div className="radio-group">
                                   <input
                                        type="radio"
                                        id="allergyYes"
                                        name="hasAllergy"
                                        value="yes"
                                        checked={hasAllergy === 'yes'}
                                        onChange={handleAllergyChange}
                                   />
                                   <label htmlFor="allergyYes">Yes</label>
                                   <input
                                        type="radio"
                                        id="allergyNo"
                                        name="hasAllergy"
                                        value="no"
                                        checked={hasAllergy === 'no'}
                                        onChange={handleAllergyChange}
                                   />
                                   <label htmlFor="allergyNo">No</label>
                              </div>
                              {hasAllergy === 'yes' && (
                                   <div className="form-group">
                                        <label htmlFor="allergyNote">Allergy Note:</label>
                                        <textarea id="allergyNote" name="allergyNote"></textarea>
                                   </div>
                              )}
                         </div>
                         <div className="form-group">
                              <label htmlFor="prescriptionFile">Attach your prescription (PDF, JPG, PNG):</label>
                              <input type="file" id="prescriptionFile" name="prescriptionFile" accept=".pdf,.jpg,.png" required />
                         </div>
                         <div className="form-group">
                              <button type="submit">Submit</button>
                         </div>
                    </form>
               </div>
               <div>
                    <Footer />
               </div>
          </div>

     )
}
