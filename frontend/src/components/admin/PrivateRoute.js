import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, userType }) => {
  const pharmacyId = localStorage.getItem("pharmacyId"); // Assuming 'pharmacyId' is the key in local storage.

  if (pharmacyId) {
    return <Route element={element} />;
  } else {
    return <Navigate to="/Pharmlogin" />;
  }
};

export default PrivateRoute;
