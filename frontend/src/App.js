import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/user/Homepage"
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import ContactUs from "./pages/user/ContactUs";
import PharmacyReg from './pages/user/PharmacyReg';
import SuperAdmReg from './pages/user/SuperAdmReg';
import ProdView from './pages/user/ProdView';
import SingleProdView from './pages/user/SingleProdView';
import ShoppingCart from './pages/user/ShoppingCart';
import ProductDashBoard from './pages/admin/ProductDashBoard';
import PharmacyDashBoard from './pages/admin/PharmacyDashBoard';
import Prescription from './pages/user/Prescription';
import AdminDashboard from './pages/admin/AdminDashboard';
import SuperAdminDashboard from './pages/admin/SuperAdminDashboard';
import PharmLogin from './pages/admin/PharmLogin';
import ProfileAd from './pages/admin/ProfileAd';
import AdminLogin from './pages/admin/AdminLogin';
import UserDashboard from './pages/admin/UserDashboard';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Pharmacist" element={<PharmacyReg />} />
          <Route path="/SuperAdmin" element={<SuperAdmReg />} />
          <Route path="/ProductView" element={<ProdView />} />
          <Route path="/SingleProdView" element={<SingleProdView />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Productdashboard" element={<ProductDashBoard />} />
          <Route path="/Admindashboard" element={<AdminDashboard />} />
          <Route path="/Pharmacydashboard" element={<PharmacyDashBoard />} />
          <Route path="/Supadmindashboard" element={<SuperAdminDashboard />} />
          <Route path="/Pharmlogin" element={<PharmLogin />} />
          <Route path="/Profilead" element={<ProfileAd />} />
          <Route path="/Prescription" element={<Prescription />} />
          <Route path="/Adminlogin" element={<AdminLogin />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
