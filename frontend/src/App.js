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
import PharmacyAdDashBoard from './pages/admin/PharmacyAdDashBoard';
import SuperAdDashBoard from './pages/admin/SuperAdDashBoard';
import Prescription from './pages/user/Prescription';


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
          <Route path="/Pharmacydashboard" element={<PharmacyAdDashBoard />} />
          <Route path="/Superdashboard" element={<SuperAdDashBoard />} />
          <Route path="/Prescription" element={<Prescription />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
